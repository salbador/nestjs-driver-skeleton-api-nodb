import { Module } from '@nestjs/common';
import { CheckAdditionalInformationController } from './checkadditionalinformation.controller';
import { CheckAdditionalInformationService } from './checkadditionalinformation.service';

@Module({
  controllers: [CheckAdditionalInformationController],
  providers: [CheckAdditionalInformationService]
})
export class CheckAdditionalInformationModule {}
