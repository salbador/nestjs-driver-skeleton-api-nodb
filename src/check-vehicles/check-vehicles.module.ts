import {  Module } from '@nestjs/common';
import { CheckVehiclesController } from './check-vehicles.controller';
import { CheckVehiclesService } from './check-vehicles.service';

@Module({
  controllers: [CheckVehiclesController],
  providers: [CheckVehiclesService]
})
export class CheckVehiclesModule {}

