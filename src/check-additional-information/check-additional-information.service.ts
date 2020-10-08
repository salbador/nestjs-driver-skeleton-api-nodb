
import { Injectable } from '@nestjs/common';
import { CheckAdditionalInformationDto } from './check-additional-information.dto';
import { checkAdditionalInformationDto } from './check-additional-information.data';

@Injectable()
export class CheckAdditionalInformationService {

    CheckAdditionalInformationConstruct: CheckAdditionalInformationDto[] = [
        { id: '1',...checkAdditionalInformationDto  },
        { id: '2', ...checkAdditionalInformationDto }
    ]

    checkAdditionalInformationService(checkAdditionalInformationDto: CheckAdditionalInformationDto): CheckAdditionalInformationDto {
        this.CheckAdditionalInformationConstruct.push(checkAdditionalInformationDto)
        return checkAdditionalInformationDto
    }
}


