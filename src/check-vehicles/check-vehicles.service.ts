
import { Injectable } from '@nestjs/common';
import { CheckVehiclesDto } from './check-vehicles.dto';
import { checkVehiclesDto } from './check-vehicles.data';

@Injectable()
export class CheckVehiclesService {

    CheckVehiclesConstruct: CheckVehiclesDto[] = [
        { id: '1',...checkVehiclesDto  },
        { id: '2', ...checkVehiclesDto }
    ]

    checkVehiclesService(checkVehiclesDto: CheckVehiclesDto): CheckVehiclesDto {
        this.CheckVehiclesConstruct.push(checkVehiclesDto)
        return checkVehiclesDto
    }
}


