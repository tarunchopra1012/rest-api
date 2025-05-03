import { Controller, Get } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Controller('scope3')
export class Scope3Controller {
  constructor(private readonly loggerService: LoggerService) {
    this.loggerService.prefix = 'Scope3Controller';
  }

  @Get('transient')
  transientScope() {
    return this.loggerService.log(
      `data logged for transient scope at ${Date.now()}`,
    );
  }
}
