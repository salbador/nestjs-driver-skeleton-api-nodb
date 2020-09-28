import { Module } from '@nestjs/common';
import { CheckVehiclesController } from './checkvehicles.controller';
import { CheckVehiclesService } from './checkvehicles.service';

@Module({
  controllers: [CheckVehiclesController],
  providers: [CheckVehiclesService]
})
export class CheckVehiclesModule {}
