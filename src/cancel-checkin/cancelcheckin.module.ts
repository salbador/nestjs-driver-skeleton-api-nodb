import { Module } from '@nestjs/common';
import { CancelCheckinController } from './cancelcheckin.controller';
import { CancelCheckinService } from './cancelcheckin.service';

@Module({
  controllers: [CancelCheckinController],
  providers: [CancelCheckinService]
})
export class CancelCheckinModule {}
