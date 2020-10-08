
import { Injectable } from '@nestjs/common';
import { GetTerminalShiftsDto } from './get-terminal-shifts.dto';
import { getTerminalShiftsDto } from './get-terminal-shifts.data';

@Injectable()
export class GetTerminalShiftsService {

    GetTerminalShiftsConstruct: GetTerminalShiftsDto[] = [
        { id: '1',...getTerminalShiftsDto  },
        { id: '2', ...getTerminalShiftsDto }
    ]

    getTerminalShiftsService(getTerminalShiftsDto: GetTerminalShiftsDto): GetTerminalShiftsDto {
        this.GetTerminalShiftsConstruct.push(getTerminalShiftsDto)
        return getTerminalShiftsDto
    }
}


