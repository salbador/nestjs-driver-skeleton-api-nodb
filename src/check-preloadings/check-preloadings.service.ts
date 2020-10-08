
import { Injectable } from '@nestjs/common';
import { CheckPreloadingsDto } from './check-preloadings.dto';
import { checkPreloadingsDto } from './check-preloadings.data';

@Injectable()
export class CheckPreloadingsService {

    CheckPreloadingsConstruct: CheckPreloadingsDto[] = [
        { id: '1',...checkPreloadingsDto  },
        { id: '2', ...checkPreloadingsDto }
    ]

    checkPreloadingsService(checkPreloadingsDto: CheckPreloadingsDto): CheckPreloadingsDto {
        this.CheckPreloadingsConstruct.push(checkPreloadingsDto)
        return checkPreloadingsDto
    }
}


