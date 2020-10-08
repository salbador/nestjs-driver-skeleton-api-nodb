import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckDriverModule } from './check-driver/check-driver.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    CheckDriverModule,
    UserModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


