
import { Injectable } from '@nestjs/common';
import { SetCheckinStatusDto } from './set-checkin-status.dto';
import { setCheckinStatusDto } from './set-checkin-status.data';

@Injectable()
export class SetCheckinStatusService {

    SetCheckinStatusConstruct: SetCheckinStatusDto[] = [
        { id: '1',...setCheckinStatusDto  },
        { id: '2', ...setCheckinStatusDto }
    ]

    setCheckinStatusService(setCheckinStatusDto: SetCheckinStatusDto): SetCheckinStatusDto {
        this.SetCheckinStatusConstruct.push(setCheckinStatusDto)
        return setCheckinStatusDto
    }
}


