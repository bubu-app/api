import { Injectable } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class LoginUserService {
  constructor(private jwtService: JwtService) {}

  public async execute(user: User) {
    const tokenPaylod = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    const token = await this.jwtService.signAsync(tokenPaylod);

    return token;
  }
}
