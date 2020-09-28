import { Module } from '@nestjs/common';
import { CheckDriverLoadingAdrController } from './checkdriverloadingadr.controller';
import { CheckDriverLoadingAdrService } from './checkdriverloadingadr.service';

@Module({
  controllers: [CheckDriverLoadingAdrController],
  providers: [CheckDriverLoadingAdrService]
})
export class CheckDriverLoadingAdrModule {}
