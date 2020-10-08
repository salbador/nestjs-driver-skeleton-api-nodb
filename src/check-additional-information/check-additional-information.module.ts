import {  Module } from '@nestjs/common';
import { CheckAdditionalInformationController } from './check-additional-information.controller';
import { CheckAdditionalInformationService } from './check-additional-information.service';

@Module({
  controllers: [CheckAdditionalInformationController],
  providers: [CheckAdditionalInformationService]
})
export class CheckAdditionalInformationModule {}

