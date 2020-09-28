import { Module } from '@nestjs/common';
import { InitiateWeigingController } from './initiateweiging.controller';
import { InitiateWeigingService } from './initiateweiging.service';

@Module({
  controllers: [InitiateWeigingController],
  providers: [InitiateWeigingService]
})
export class InitiateWeigingModule {}
