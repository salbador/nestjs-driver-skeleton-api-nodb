import { Module } from '@nestjs/common';
import { RecalculateCompartmentPositionsController } from './recalculatecompartmentpositions.controller';
import { RecalculateCompartmentPositionsService } from './recalculatecompartmentpositions.service';

@Module({
  controllers: [RecalculateCompartmentPositionsController],
  providers: [RecalculateCompartmentPositionsService]
})
export class RecalculateCompartmentPositionsModule {}
