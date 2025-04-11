import { Module } from "@nestjs/common";
import { UsersModule } from "./modules/users/users.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dataSourceOptions } from "./database/datasource";
import { JwtModule } from "@nestjs/jwt";

const ENVIRONMENT = process.env.ENVIRONMENT;
const JWT_SECERT = process.env.JWT_SECRET;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${ENVIRONMENT}`,
    }),
    JwtModule.register({
      global: true,
      secret: JWT_SECERT,
      signOptions: { expiresIn: "14d" },
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
