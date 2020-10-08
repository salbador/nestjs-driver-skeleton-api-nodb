import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { GetCheckinService } from './get-checkin.service';
import { GetCheckinInterface } from './get-checkin.interface';
import { GetCheckinDto } from './get-checkin.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('getCheckin')
export class GetCheckinController {
    constructor(
      private service: GetCheckinService
    ) {}
    @Post()
    async post(@Body() userDto: UserDto): Promise<any>{
        const params = JSON.stringify(userDto);
        return await axios.post('http://localhost:3000/user',
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
    modelPost(@Body() getCheckinDto: GetCheckinDto):  GetCheckinInterface {
        return this.service.getCheckinService(getCheckinDto)
    }
}

