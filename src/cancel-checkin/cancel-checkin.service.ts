
import { Injectable } from '@nestjs/common';
import { CancelCheckinDto } from './cancel-checkin.dto';
import { cancelCheckinDto } from './cancel-checkin.data';

@Injectable()
export class CancelCheckinService {

    CancelCheckinConstruct: CancelCheckinDto[] = [
        { id: '1',...cancelCheckinDto  },
        { id: '2', ...cancelCheckinDto }
    ]

    cancelCheckinService(cancelCheckinDto: CancelCheckinDto): CancelCheckinDto {
        this.CancelCheckinConstruct.push(cancelCheckinDto)
        return cancelCheckinDto
    }
}


