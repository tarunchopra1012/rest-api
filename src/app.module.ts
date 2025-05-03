import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { CommonModule } from './common/common.module';
import { AuthMiddleware } from './common/middlewares/auth.middleware';
import { AddressBookModule } from './address-book/address-book.module';

@Module({
  imports: [UserModule, AddressModule, CommonModule, AddressBookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('protected-route');
  }
}
