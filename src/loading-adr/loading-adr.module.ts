import {  Module } from '@nestjs/common';
import { LoadingAdrController } from './loading-adr.controller';
import { LoadingAdrService } from './loading-adr.service';

@Module({
  controllers: [LoadingAdrController],
  providers: [LoadingAdrService]
})
export class LoadingAdrModule {}

