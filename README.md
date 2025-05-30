# 🧱 NestJS Project Template

> ⚙️ **Modern, scalable NestJS starter with Docker, TypeORM, and isolated migration flow**

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/your-username/nest-template.git
cd nest-template

# 2. Create .env file (based on .env.example)
cp .env.example .env

# 3. Build and run containers
docker compose up --build

# 4. Run migrations (in a separate terminal)
docker compose run migrate
```

---

## 📁 Folder Structure

```
src/
├── common/              # Shared utils, configs, database setup (was "core")
│   └── db/
│       ├── entities/    # TypeORM entities
│       ├── migrations/  # TypeORM migrations
│       └── data-source.ts
├── resources/           # Feature modules
├── main.ts              # App entry point
```

---

## 🐳 Dockerized Stack

| Service   | Description                             | Port    |
|-----------|-----------------------------------------|---------|
| `app`     | Main NestJS API service                 | `3000`  |
| `db`      | PostgreSQL 17 with volume + healthcheck | `5432`  |
| `migrate` | One-shot service for running migrations | `—`     |

---

## 📦 Included Features

- ✅ TypeORM 0.3+ with external `DataSource`
- ✅ 🐳 Dockerfile with multi-stage build
- ✅ PostgreSQL with healthcheck + `pg_isready` wait
- ✅ `start.sh` and `migrate.sh` scripts
- ✅ Removed `synchronize: true` for production safety
- ✅ Swagger support via `@nestjs/swagger`
- ✅ Clean `.env` support

---

## 🧪 Useful Commands

```bash
# Run the app in dev mode (locally)
yarn start:dev

# Generate a migration
yarn typeorm:migrate:generate src/common/db/migrations/SomeMigrationName

# Run migrations
yarn typeorm:migrate:run

# Revert the last migration
yarn typeorm:migrate:revert
```

---

## 📝 Environment Variables

Example `.env`:

```env
PORT=3000
DB_HOST=db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=app_db
```

---

## 🔮 Coming Soon

- ✨ Prettier + ESLint config
- 🔐 Authentication module scaffold
- 📊 OpenAPI docs via Swagger (`/docs`)
- 🧾 Healthcheck route for uptime monitoring

---

## 🧙‍♂️ Author

Made with ❤️ by [kennyhazzar](https://github.com/kennyhazzar)

---

## 📜 License

MIT — free for personal and commercial use.
