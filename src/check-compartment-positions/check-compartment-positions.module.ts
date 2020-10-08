import {  Module } from '@nestjs/common';
import { CheckCompartmentPositionsController } from './check-compartment-positions.controller';
import { CheckCompartmentPositionsService } from './check-compartment-positions.service';

@Module({
  controllers: [CheckCompartmentPositionsController],
  providers: [CheckCompartmentPositionsService]
})
export class CheckCompartmentPositionsModule {}

