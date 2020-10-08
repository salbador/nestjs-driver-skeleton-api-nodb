import {  Module } from '@nestjs/common';
import { CheckPreloadingsController } from './check-preloadings.controller';
import { CheckPreloadingsService } from './check-preloadings.service';

@Module({
  controllers: [CheckPreloadingsController],
  providers: [CheckPreloadingsService]
})
export class CheckPreloadingsModule {}

