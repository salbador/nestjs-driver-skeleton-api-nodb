import {  Module } from '@nestjs/common';
import { GetAdditionalInfoTermplatesController } from './get-additional-info-termplates.controller';
import { GetAdditionalInfoTermplatesService } from './get-additional-info-termplates.service';

@Module({
  controllers: [GetAdditionalInfoTermplatesController],
  providers: [GetAdditionalInfoTermplatesService]
})
export class GetAdditionalInfoTermplatesModule {}

