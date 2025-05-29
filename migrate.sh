#!/bin/bash
set -e

echo "⏳ Waiting for PostgreSQL to be ready..."
until pg_isready -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USERNAME"; do
  echo "Waiting for database at $DB_HOST:$DB_PORT..."
  sleep 2
done

echo "📦 Running TypeORM migrations..."
yarn typeorm:migrate:run
