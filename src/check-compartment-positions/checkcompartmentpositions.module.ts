import { Module } from '@nestjs/common';
import { CheckCompartmentPositionsController } from './checkcompartmentpositions.controller';
import { CheckCompartmentPositionsService } from './checkcompartmentpositions.service';

@Module({
  controllers: [CheckCompartmentPositionsController],
  providers: [CheckCompartmentPositionsService]
})
export class CheckCompartmentPositionsModule {}
