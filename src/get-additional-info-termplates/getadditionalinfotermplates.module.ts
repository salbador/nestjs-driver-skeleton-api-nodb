import { Module } from '@nestjs/common';
import { GetAdditionalInfoTermplatesController } from './getadditionalinfotermplates.controller';
import { GetAdditionalInfoTermplatesService } from './getadditionalinfotermplates.service';

@Module({
  controllers: [GetAdditionalInfoTermplatesController],
  providers: [GetAdditionalInfoTermplatesService]
})
export class GetAdditionalInfoTermplatesModule {}
