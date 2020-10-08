import {  Module } from '@nestjs/common';
import { GetCheckinHeadersController } from './get-checkin-headers.controller';
import { GetCheckinHeadersService } from './get-checkin-headers.service';

@Module({
  controllers: [GetCheckinHeadersController],
  providers: [GetCheckinHeadersService]
})
export class GetCheckinHeadersModule {}

