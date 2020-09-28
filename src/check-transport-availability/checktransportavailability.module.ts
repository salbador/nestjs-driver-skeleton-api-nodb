import { Module } from '@nestjs/common';
import { CheckTransportAvailabilityController } from './checktransportavailability.controller';
import { CheckTransportAvailabilityService } from './checktransportavailability.service';

@Module({
  controllers: [CheckTransportAvailabilityController],
  providers: [CheckTransportAvailabilityService]
})
export class CheckTransportAvailabilityModule {}
