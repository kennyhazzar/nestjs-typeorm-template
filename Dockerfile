# syntax=docker/dockerfile:1.4

# Stage 1: Install dependencies
FROM node:23-slim AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn \
    yarn install --frozen-lockfile

# Stage 2: Build the application
FROM deps AS builder
WORKDIR /app
COPY . .
RUN yarn build

# Stage 3: Final image
FROM node:23-slim AS final

# Install PostgreSQL client for pg_isready
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/src ./src
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/start.sh ./start.sh
COPY --from=builder /app/migrate.sh ./migrate.sh
COPY --from=builder /app/src/common/db/migrations ./src/common/db/migrations
COPY --from=builder /app/tsconfig.json ./tsconfig.json

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn \
    yarn install --frozen-lockfile --production && \
    yarn global add ts-node tsconfig-paths && \
    yarn add -W ts-node tsconfig-paths

RUN chmod +x ./start.sh && chmod +x ./migrate.sh

EXPOSE 3000

CMD ["./start.sh"]
