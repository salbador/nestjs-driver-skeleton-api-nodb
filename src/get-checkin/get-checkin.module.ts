import {  Module } from '@nestjs/common';
import { GetCheckinController } from './get-checkin.controller';
import { GetCheckinService } from './get-checkin.service';

@Module({
  controllers: [GetCheckinController],
  providers: [GetCheckinService]
})
export class GetCheckinModule {}

