
import { Injectable } from '@nestjs/common';
import { CheckCompartmentPositionsDto } from './check-compartment-positions.dto';
import { checkCompartmentPositionsDto } from './check-compartment-positions.data';

@Injectable()
export class CheckCompartmentPositionsService {

    CheckCompartmentPositionsConstruct: CheckCompartmentPositionsDto[] = [
        { id: '1',...checkCompartmentPositionsDto  },
        { id: '2', ...checkCompartmentPositionsDto }
    ]

    checkCompartmentPositionsService(checkCompartmentPositionsDto: CheckCompartmentPositionsDto): CheckCompartmentPositionsDto {
        this.CheckCompartmentPositionsConstruct.push(checkCompartmentPositionsDto)
        return checkCompartmentPositionsDto
    }
}


