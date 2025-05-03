import { Module } from '@nestjs/common';
import { ScopeController } from './scope.controller';
import { DatabaseService } from './database.service';
import { UserSessionService } from './user-session.service';
import { LoggerService } from './logger.service';
import { Scope2Controller } from './scope2.controller';
import { Scope3Controller } from './scope3.controller';
import { Scope4Controller } from './scope4.controller';

@Module({
  controllers: [
    ScopeController,
    Scope2Controller,
    Scope3Controller,
    Scope4Controller,
  ],
  providers: [DatabaseService, UserSessionService, LoggerService],
})
export class AddressBookModule {}
