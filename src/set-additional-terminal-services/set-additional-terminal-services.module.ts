import { Module } from '@nestjs/common';
import { SetAdditionalTerminalServicesController } from './setadditionalterminalservices.controller';
import { SetAdditionalTerminalServicesService } from './setadditionalterminalservices.service';

@Module({
  controllers: [SetAdditionalTerminalServicesController],
  providers: [SetAdditionalTerminalServicesService]
})
export class SetAdditionalTerminalServicesModule {}
