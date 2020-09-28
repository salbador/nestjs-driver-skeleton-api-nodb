import { Module } from '@nestjs/common';
import { SetCheckinStatusController } from './setcheckinstatus.controller';
import { SetCheckinStatusService } from './setcheckinstatus.service';

@Module({
  controllers: [SetCheckinStatusController],
  providers: [SetCheckinStatusService]
})
export class SetCheckinStatusModule {}
