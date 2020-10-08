import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { GetCheckinHeadersService } from './get-checkin-headers.service';
import { GetCheckinHeadersInterface } from './get-checkin-headers.interface';
import { GetCheckinHeadersDto } from './get-checkin-headers.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('getCheckinHeaders')
export class GetCheckinHeadersController {
    constructor(
      private service: GetCheckinHeadersService
    ) {}
    @Post()
    async getCheckinHeadersPost(@Body() userDto: UserDto): Promise<any>{
        const params = JSON.stringify(userDto);
        return await axios.post('http://localhost:3000/api/v2/user',
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then(res => {
                  console.log(res.data);
                  return res.data
              })
        }

    @Post('/model')
    modelGetCheckinHeadersPost(@Body() getCheckinHeadersDto: GetCheckinHeadersDto):  GetCheckinHeadersInterface {
        return this.service.getCheckinHeadersService(getCheckinHeadersDto)
    }
}

