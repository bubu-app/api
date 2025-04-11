import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserService } from "./services/create.service";
import { LoginUserService } from "./services/login.service";
import { GoogleAuthService } from "src/shared/auth/google.auth";

@Controller("users")
export class UsersController {
  constructor(
    private googleAuthService: GoogleAuthService,
    private createUserService: CreateUserService,
    private loginUserSerivce: LoginUserService,
  ) {}

  @Post("google/auth")
  public async googleAuth(@Body() data: { idToken: string }) {
    const userGoogle = await this.googleAuthService.validateToken(data.idToken);

    const user = await this.createUserService.execute({
      name: userGoogle?.name as string,
      email: userGoogle?.email as string,
    });

    const token = await this.loginUserSerivce.execute(user);

    return { token };
  }
}
