
import { Injectable } from '@nestjs/common';
import { GetCheckinHeadersDto } from './get-checkin-headers.dto';
import { getCheckinHeadersDto } from './get-checkin-headers.data';

@Injectable()
export class GetCheckinHeadersService {

    GetCheckinHeadersConstruct: GetCheckinHeadersDto[] = [
        { id: '1',...getCheckinHeadersDto  },
        { id: '2', ...getCheckinHeadersDto }
    ]

    getCheckinHeadersService(getCheckinHeadersDto: GetCheckinHeadersDto): GetCheckinHeadersDto {
        this.GetCheckinHeadersConstruct.push(getCheckinHeadersDto)
        return getCheckinHeadersDto
    }
}


