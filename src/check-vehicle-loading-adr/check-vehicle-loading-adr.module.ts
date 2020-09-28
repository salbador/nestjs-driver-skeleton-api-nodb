import { Module } from '@nestjs/common';
import { CheckVehicleLoadingAdrController } from './checkvehicleloadingadr.controller';
import { CheckVehicleLoadingAdrService } from './checkvehicleloadingadr.service';

@Module({
  controllers: [CheckVehicleLoadingAdrController],
  providers: [CheckVehicleLoadingAdrService]
})
export class CheckVehicleLoadingAdrModule {}
