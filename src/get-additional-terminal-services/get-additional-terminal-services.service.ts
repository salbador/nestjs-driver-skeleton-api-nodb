
import { Injectable } from '@nestjs/common';
import { GetAdditionalTerminalServicesDto } from './get-additional-terminal-services.dto';
import { getAdditionalTerminalServicesDto } from './get-additional-terminal-services.data';

@Injectable()
export class GetAdditionalTerminalServicesService {

    GetAdditionalTerminalServicesConstruct: GetAdditionalTerminalServicesDto[] = [
        { id: '1',...getAdditionalTerminalServicesDto  },
        { id: '2', ...getAdditionalTerminalServicesDto }
    ]

    getAdditionalTerminalServicesService(getAdditionalTerminalServicesDto: GetAdditionalTerminalServicesDto): GetAdditionalTerminalServicesDto {
        this.GetAdditionalTerminalServicesConstruct.push(getAdditionalTerminalServicesDto)
        return getAdditionalTerminalServicesDto
    }
}


