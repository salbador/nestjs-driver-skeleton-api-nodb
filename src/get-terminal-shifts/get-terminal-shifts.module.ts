import {  Module } from '@nestjs/common';
import { GetTerminalShiftsController } from './get-terminal-shifts.controller';
import { GetTerminalShiftsService } from './get-terminal-shifts.service';

@Module({
  controllers: [GetTerminalShiftsController],
  providers: [GetTerminalShiftsService]
})
export class GetTerminalShiftsModule {}

