
import { Injectable } from '@nestjs/common';
import { SetAdditionalTerminalServicesDto } from './set-additional-terminal-services.dto';
import { setAdditionalTerminalServicesDto } from './set-additional-terminal-services.data';

@Injectable()
export class SetAdditionalTerminalServicesService {

    SetAdditionalTerminalServicesConstruct: SetAdditionalTerminalServicesDto[] = [
        { id: '1',...setAdditionalTerminalServicesDto  },
        { id: '2', ...setAdditionalTerminalServicesDto }
    ]

    setAdditionalTerminalServicesService(setAdditionalTerminalServicesDto: SetAdditionalTerminalServicesDto): SetAdditionalTerminalServicesDto {
        this.SetAdditionalTerminalServicesConstruct.push(setAdditionalTerminalServicesDto)
        return setAdditionalTerminalServicesDto
    }
}


