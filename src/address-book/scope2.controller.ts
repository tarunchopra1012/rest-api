import { Controller, Get } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Controller('scope2')
export class Scope2Controller {
  constructor(private readonly loggerService: LoggerService) {
    this.loggerService.prefix = 'Scope2Controller';
  }

  @Get('transient')
  transientScope() {
    return this.loggerService.log(
      `data logged for transient scope at ${Date.now()}`,
    );
  }
}
