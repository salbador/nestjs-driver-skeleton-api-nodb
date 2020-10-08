import {  Module } from '@nestjs/common';
import { RecalculateCompartmentPositionsController } from './recalculate-compartment-positions.controller';
import { RecalculateCompartmentPositionsService } from './recalculate-compartment-positions.service';

@Module({
  controllers: [RecalculateCompartmentPositionsController],
  providers: [RecalculateCompartmentPositionsService]
})
export class RecalculateCompartmentPositionsModule {}

