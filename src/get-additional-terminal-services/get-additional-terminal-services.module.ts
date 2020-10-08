import {  Module } from '@nestjs/common';
import { GetAdditionalTerminalServicesController } from './get-additional-terminal-services.controller';
import { GetAdditionalTerminalServicesService } from './get-additional-terminal-services.service';

@Module({
  controllers: [GetAdditionalTerminalServicesController],
  providers: [GetAdditionalTerminalServicesService]
})
export class GetAdditionalTerminalServicesModule {}

