import { Module } from '@nestjs/common';
import { GetCheckinHeadersController } from './getcheckinheaders.controller';
import { GetCheckinHeadersService } from './getcheckinheaders.service';

@Module({
  controllers: [GetCheckinHeadersController],
  providers: [GetCheckinHeadersService]
})
export class GetCheckinHeadersModule {}
