import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";

const ENVIRONMENT = process.env.ENVIRONMENT;

dotenv.config({ path: `.env.${ENVIRONMENT}` });

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ["dist/**/modules/**/*.entity.js"],
  synchronize: false,
  migrations: ["dist/database/migrations/*.js"],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
