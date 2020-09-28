import { Module } from '@nestjs/common';
import { GetCheckinController } from './getcheckin.controller';
import { GetCheckinService } from './getcheckin.service';

@Module({
  controllers: [GetCheckinController],
  providers: [GetCheckinService]
})
export class GetCheckinModule {}
