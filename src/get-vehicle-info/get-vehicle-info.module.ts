import {  Module } from '@nestjs/common';
import { GetVehicleInfoController } from './get-vehicle-info.controller';
import { GetVehicleInfoService } from './get-vehicle-info.service';

@Module({
  controllers: [GetVehicleInfoController],
  providers: [GetVehicleInfoService]
})
export class GetVehicleInfoModule {}

