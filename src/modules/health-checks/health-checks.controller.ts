import { Controller, Get } from "@nestjs/common";

@Controller("health-checks")
export class HealthChecksController {
  constructor() {}

  @Get()
  public healthChecks() {
    return { success: true };
  }
}
