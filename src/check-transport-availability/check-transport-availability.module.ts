import {  Module } from '@nestjs/common';
import { CheckTransportAvailabilityController } from './check-transport-availability.controller';
import { CheckTransportAvailabilityService } from './check-transport-availability.service';

@Module({
  controllers: [CheckTransportAvailabilityController],
  providers: [CheckTransportAvailabilityService]
})
export class CheckTransportAvailabilityModule {}

