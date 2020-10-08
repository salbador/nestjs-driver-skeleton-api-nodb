import {  Module } from '@nestjs/common';
import { SetCheckinController } from './set-checkin.controller';
import { SetCheckinService } from './set-checkin.service';

@Module({
  controllers: [SetCheckinController],
  providers: [SetCheckinService]
})
export class SetCheckinModule {}

