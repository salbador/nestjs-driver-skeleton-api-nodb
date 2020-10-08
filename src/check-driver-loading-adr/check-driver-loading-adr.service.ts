
import { Injectable } from '@nestjs/common';
import { CheckDriverLoadingAdrDto } from './check-driver-loading-adr.dto';
import { checkDriverLoadingAdrDto } from './check-driver-loading-adr.data';

@Injectable()
export class CheckDriverLoadingAdrService {

    CheckDriverLoadingAdrConstruct: CheckDriverLoadingAdrDto[] = [
        { id: '1',...checkDriverLoadingAdrDto  },
        { id: '2', ...checkDriverLoadingAdrDto }
    ]

    checkDriverLoadingAdrService(checkDriverLoadingAdrDto: CheckDriverLoadingAdrDto): CheckDriverLoadingAdrDto {
        this.CheckDriverLoadingAdrConstruct.push(checkDriverLoadingAdrDto)
        return checkDriverLoadingAdrDto
    }
}


