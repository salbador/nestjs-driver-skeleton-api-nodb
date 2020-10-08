
import { Injectable } from '@nestjs/common';
import { GetAdditionalInfoTermplatesDto } from './get-additional-info-termplates.dto';
import { getAdditionalInfoTermplatesDto } from './get-additional-info-termplates.data';

@Injectable()
export class GetAdditionalInfoTermplatesService {

    GetAdditionalInfoTermplatesConstruct: GetAdditionalInfoTermplatesDto[] = [
        { id: '1',...getAdditionalInfoTermplatesDto  },
        { id: '2', ...getAdditionalInfoTermplatesDto }
    ]

    getAdditionalInfoTermplatesService(getAdditionalInfoTermplatesDto: GetAdditionalInfoTermplatesDto): GetAdditionalInfoTermplatesDto {
        this.GetAdditionalInfoTermplatesConstruct.push(getAdditionalInfoTermplatesDto)
        return getAdditionalInfoTermplatesDto
    }
}


