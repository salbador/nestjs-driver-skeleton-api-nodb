
import { Injectable } from '@nestjs/common';
import { CheckVehicleLoadingAdrDto } from './check-vehicle-loading-adr.dto';
import { checkVehicleLoadingAdrDto } from './check-vehicle-loading-adr.data';

@Injectable()
export class CheckVehicleLoadingAdrService {

    CheckVehicleLoadingAdrConstruct: CheckVehicleLoadingAdrDto[] = [
        { id: '1',...checkVehicleLoadingAdrDto  },
        { id: '2', ...checkVehicleLoadingAdrDto }
    ]

    checkVehicleLoadingAdrService(checkVehicleLoadingAdrDto: CheckVehicleLoadingAdrDto): CheckVehicleLoadingAdrDto {
        this.CheckVehicleLoadingAdrConstruct.push(checkVehicleLoadingAdrDto)
        return checkVehicleLoadingAdrDto
    }
}


