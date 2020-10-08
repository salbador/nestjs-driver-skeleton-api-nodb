import {  Module } from '@nestjs/common';
import { CancelCheckinController } from './cancel-checkin.controller';
import { CancelCheckinService } from './cancel-checkin.service';

@Module({
  controllers: [CancelCheckinController],
  providers: [CancelCheckinService]
})
export class CancelCheckinModule {}

