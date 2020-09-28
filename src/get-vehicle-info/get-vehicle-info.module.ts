import { Module } from '@nestjs/common';
import { GetVehicleInfoController } from './getvehicleinfo.controller';
import { GetVehicleInfoService } from './getvehicleinfo.service';

@Module({
  controllers: [GetVehicleInfoController],
  providers: [GetVehicleInfoService]
})
export class GetVehicleInfoModule {}
