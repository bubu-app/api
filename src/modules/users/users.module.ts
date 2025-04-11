import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { CreateUserService } from "./services/create.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { LoginUserService } from "./services/login.service";
import { GoogleAuthService } from "src/shared/auth/google.auth";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [CreateUserService, LoginUserService, GoogleAuthService],
})
export class UsersModule {}
