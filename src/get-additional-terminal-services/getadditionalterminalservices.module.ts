import { Module } from '@nestjs/common';
import { GetAdditionalTerminalServicesController } from './getadditionalterminalservices.controller';
import { GetAdditionalTerminalServicesService } from './getadditionalterminalservices.service';

@Module({
  controllers: [GetAdditionalTerminalServicesController],
  providers: [GetAdditionalTerminalServicesService]
})
export class GetAdditionalTerminalServicesModule {}
