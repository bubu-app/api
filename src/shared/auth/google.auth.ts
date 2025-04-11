import { BadRequestException, Injectable } from "@nestjs/common";
import { OAuth2Client } from "google-auth-library";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class GoogleAuthService {
  private readonly client: OAuth2Client;

  constructor(private configService: ConfigService) {
    const googleClientId = this.configService.get<string>("GOOGLE_CLIENT_ID");
    this.client = new OAuth2Client(googleClientId);
  }

  async validateToken(idToken: string) {
    try {
      const ticket = await this.client.verifyIdToken({
        idToken,
        audience: this.configService.get<string>("GOOGLE_CLIENT_ID"),
      });

      const payload = ticket.getPayload();

      return payload;
    } catch {
      throw new BadRequestException("Token invalido");
    }
  }
}
