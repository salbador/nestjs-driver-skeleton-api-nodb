import {  Module } from '@nestjs/common';
import { InitiateWeigingController } from './initiate-weiging.controller';
import { InitiateWeigingService } from './initiate-weiging.service';

@Module({
  controllers: [InitiateWeigingController],
  providers: [InitiateWeigingService]
})
export class InitiateWeigingModule {}

