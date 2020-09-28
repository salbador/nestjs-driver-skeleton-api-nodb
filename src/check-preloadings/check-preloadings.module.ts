import { Module } from '@nestjs/common';
import { CheckPreloadingsController } from './checkpreloadings.controller';
import { CheckPreloadingsService } from './checkpreloadings.service';

@Module({
  controllers: [CheckPreloadingsController],
  providers: [CheckPreloadingsService]
})
export class CheckPreloadingsModule {}
