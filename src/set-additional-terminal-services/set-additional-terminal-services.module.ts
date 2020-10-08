import {  Module } from '@nestjs/common';
import { SetAdditionalTerminalServicesController } from './set-additional-terminal-services.controller';
import { SetAdditionalTerminalServicesService } from './set-additional-terminal-services.service';

@Module({
  controllers: [SetAdditionalTerminalServicesController],
  providers: [SetAdditionalTerminalServicesService]
})
export class SetAdditionalTerminalServicesModule {}

