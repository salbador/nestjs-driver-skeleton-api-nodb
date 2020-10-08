
import { Injectable } from '@nestjs/common';
import { GetAuthPositionsDto } from './get-auth-positions.dto';
import { getAuthPositionsDto } from './get-auth-positions.data';

@Injectable()
export class GetAuthPositionsService {

    GetAuthPositionsConstruct: GetAuthPositionsDto[] = [
        { id: '1',...getAuthPositionsDto  },
        { id: '2', ...getAuthPositionsDto }
    ]

    getAuthPositionsService(getAuthPositionsDto: GetAuthPositionsDto): GetAuthPositionsDto {
        this.GetAuthPositionsConstruct.push(getAuthPositionsDto)
        return getAuthPositionsDto
    }
}


