
import { Injectable } from '@nestjs/common';
import { GetVehicleInfoDto } from './get-vehicle-info.dto';
import { getVehicleInfoDto } from './get-vehicle-info.data';

@Injectable()
export class GetVehicleInfoService {

    GetVehicleInfoConstruct: GetVehicleInfoDto[] = [
        { id: '1',...getVehicleInfoDto  },
        { id: '2', ...getVehicleInfoDto }
    ]

    getVehicleInfoService(getVehicleInfoDto: GetVehicleInfoDto): GetVehicleInfoDto {
        this.GetVehicleInfoConstruct.push(getVehicleInfoDto)
        return getVehicleInfoDto
    }
}


