import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { SetCheckinService } from './set-checkin.service';
import { SetCheckinInterface } from './set-checkin.interface';
import { SetCheckinDto } from './set-checkin.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('setCheckin')
export class SetCheckinController {
    constructor(
      private service: SetCheckinService
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
    modelPost(@Body() setCheckinDto: SetCheckinDto):  SetCheckinInterface {
        return this.service.setCheckinService(setCheckinDto)
    }
}

