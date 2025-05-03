import { Controller, Get } from '@nestjs/common';
import { UserSessionService } from './user-session.service';

@Controller('scope4')
export class Scope4Controller {
  constructor(private readonly userSessionService: UserSessionService) {}

  @Get('request')
  requestScope() {
    return this.userSessionService.getUserSessionId();
  }
}
