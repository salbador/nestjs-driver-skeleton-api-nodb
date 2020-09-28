import { Module } from '@nestjs/common';
import { GetTerminalShiftsController } from './getterminalshifts.controller';
import { GetTerminalShiftsService } from './getterminalshifts.service';

@Module({
  controllers: [GetTerminalShiftsController],
  providers: [GetTerminalShiftsService]
})
export class GetTerminalShiftsModule {}
