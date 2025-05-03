import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('scope')
export class ScopeController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('singleton')
  singleton() {
    return this.databaseService.getDatabaseConnectionString();
  }
}
