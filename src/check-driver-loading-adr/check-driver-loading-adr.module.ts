import {  Module } from '@nestjs/common';
import { CheckDriverLoadingAdrController } from './check-driver-loading-adr.controller';
import { CheckDriverLoadingAdrService } from './check-driver-loading-adr.service';

@Module({
  controllers: [CheckDriverLoadingAdrController],
  providers: [CheckDriverLoadingAdrService]
})
export class CheckDriverLoadingAdrModule {}

