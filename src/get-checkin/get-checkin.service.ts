
import { Injectable } from '@nestjs/common';
import { GetCheckinDto } from './get-checkin.dto';
import { getCheckinDto } from './get-checkin.data';

@Injectable()
export class GetCheckinService {

    GetCheckinConstruct: GetCheckinDto[] = [
        { id: '1',...getCheckinDto  },
        { id: '2', ...getCheckinDto }
    ]

    getCheckinService(getCheckinDto: GetCheckinDto): GetCheckinDto {
        this.GetCheckinConstruct.push(getCheckinDto)
        return getCheckinDto
    }
}


