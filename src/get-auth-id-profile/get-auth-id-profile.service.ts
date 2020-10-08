
import { Injectable } from '@nestjs/common';
import { GetAuthIdProfileDto } from './get-auth-id-profile.dto';
import { getAuthIdProfileDto } from './get-auth-id-profile.data';

@Injectable()
export class GetAuthIdProfileService {

    GetAuthIdProfileConstruct: GetAuthIdProfileDto[] = [
        { id: '1',...getAuthIdProfileDto  },
        { id: '2', ...getAuthIdProfileDto }
    ]

    getAuthIdProfileService(getAuthIdProfileDto: GetAuthIdProfileDto): GetAuthIdProfileDto {
        this.GetAuthIdProfileConstruct.push(getAuthIdProfileDto)
        return getAuthIdProfileDto
    }
}


