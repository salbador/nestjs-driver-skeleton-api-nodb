
import { Injectable } from '@nestjs/common';
import { CheckTransportAvailabilityDto } from './check-transport-availability.dto';
import { checkTransportAvailabilityDto } from './check-transport-availability.data';

@Injectable()
export class CheckTransportAvailabilityService {

    CheckTransportAvailabilityConstruct: CheckTransportAvailabilityDto[] = [
        { id: '1',...checkTransportAvailabilityDto  },
        { id: '2', ...checkTransportAvailabilityDto }
    ]

    checkTransportAvailabilityService(checkTransportAvailabilityDto: CheckTransportAvailabilityDto): CheckTransportAvailabilityDto {
        this.CheckTransportAvailabilityConstruct.push(checkTransportAvailabilityDto)
        return checkTransportAvailabilityDto
    }
}


