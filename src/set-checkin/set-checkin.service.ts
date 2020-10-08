
import { Injectable } from '@nestjs/common';
import { SetCheckinDto } from './set-checkin.dto';
import { setCheckinDto } from './set-checkin.data';

@Injectable()
export class SetCheckinService {

    SetCheckinConstruct: SetCheckinDto[] = [
        { id: '1',...setCheckinDto  },
        { id: '2', ...setCheckinDto }
    ]

    setCheckinService(setCheckinDto: SetCheckinDto): SetCheckinDto {
        this.SetCheckinConstruct.push(setCheckinDto)
        return setCheckinDto
    }
}


