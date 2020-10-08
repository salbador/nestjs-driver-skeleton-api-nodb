import {  Module } from '@nestjs/common';
import { CheckVehicleLoadingAdrController } from './check-vehicle-loading-adr.controller';
import { CheckVehicleLoadingAdrService } from './check-vehicle-loading-adr.service';

@Module({
  controllers: [CheckVehicleLoadingAdrController],
  providers: [CheckVehicleLoadingAdrService]
})
export class CheckVehicleLoadingAdrModule {}

