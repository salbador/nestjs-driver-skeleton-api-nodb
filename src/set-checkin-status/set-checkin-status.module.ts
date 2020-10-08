import {  Module } from '@nestjs/common';
import { SetCheckinStatusController } from './set-checkin-status.controller';
import { SetCheckinStatusService } from './set-checkin-status.service';

@Module({
  controllers: [SetCheckinStatusController],
  providers: [SetCheckinStatusService]
})
export class SetCheckinStatusModule {}

