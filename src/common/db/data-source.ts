import { DataSource } from 'typeorm';
import 'dotenv/config';
import { join } from 'path';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [join(__dirname, '../../', '/**/*.entity.{js,ts}')],
  migrations: ['src/common/db/migrations/*.ts'],
  synchronize: false,
});
