import {  Module } from '@nestjs/common';
import { GetWeightController } from './get-weight.controller';
import { GetWeightService } from './get-weight.service';

@Module({
  controllers: [GetWeightController],
  providers: [GetWeightService]
})
export class GetWeightModule {}

