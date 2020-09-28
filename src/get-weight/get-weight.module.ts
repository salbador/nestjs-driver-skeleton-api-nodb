import { Module } from '@nestjs/common';
import { GetWeightController } from './getweight.controller';
import { GetWeightService } from './getweight.service';

@Module({
  controllers: [GetWeightController],
  providers: [GetWeightService]
})
export class GetWeightModule {}
