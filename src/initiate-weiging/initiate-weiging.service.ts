
import { Injectable } from '@nestjs/common';
import { InitiateWeigingDto } from './initiate-weiging.dto';
import { initiateWeigingDto } from './initiate-weiging.data';

@Injectable()
export class InitiateWeigingService {

    InitiateWeigingConstruct: InitiateWeigingDto[] = [
        { id: '1',...initiateWeigingDto  },
        { id: '2', ...initiateWeigingDto }
    ]

    initiateWeigingService(initiateWeigingDto: InitiateWeigingDto): InitiateWeigingDto {
        this.InitiateWeigingConstruct.push(initiateWeigingDto)
        return initiateWeigingDto
    }
}


