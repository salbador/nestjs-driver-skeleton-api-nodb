import { Module } from '@nestjs/common';
import { SetCheckinController } from './setcheckin.controller';
import { SetCheckinService } from './setcheckin.service';

@Module({
  controllers: [SetCheckinController],
  providers: [SetCheckinService]
})
export class SetCheckinModule {}
