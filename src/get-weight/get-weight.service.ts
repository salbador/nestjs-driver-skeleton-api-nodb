
import { Injectable } from '@nestjs/common';
import { GetWeightDto } from './get-weight.dto';
import { getWeightDto } from './get-weight.data';

@Injectable()
export class GetWeightService {

    GetWeightConstruct: GetWeightDto[] = [
        { id: '1',...getWeightDto  },
        { id: '2', ...getWeightDto }
    ]

    getWeightService(getWeightDto: GetWeightDto): GetWeightDto {
        this.GetWeightConstruct.push(getWeightDto)
        return getWeightDto
    }
}


