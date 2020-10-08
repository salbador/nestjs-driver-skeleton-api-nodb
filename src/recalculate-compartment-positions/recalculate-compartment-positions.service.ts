
import { Injectable } from '@nestjs/common';
import { RecalculateCompartmentPositionsDto } from './recalculate-compartment-positions.dto';
import { recalculateCompartmentPositionsDto } from './recalculate-compartment-positions.data';

@Injectable()
export class RecalculateCompartmentPositionsService {

    RecalculateCompartmentPositionsConstruct: RecalculateCompartmentPositionsDto[] = [
        { id: '1',...recalculateCompartmentPositionsDto  },
        { id: '2', ...recalculateCompartmentPositionsDto }
    ]

    recalculateCompartmentPositionsService(recalculateCompartmentPositionsDto: RecalculateCompartmentPositionsDto): RecalculateCompartmentPositionsDto {
        this.RecalculateCompartmentPositionsConstruct.push(recalculateCompartmentPositionsDto)
        return recalculateCompartmentPositionsDto
    }
}


