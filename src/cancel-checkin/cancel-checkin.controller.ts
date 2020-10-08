import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { CancelCheckinService } from './cancel-checkin.service';
import { CancelCheckinInterface } from './cancel-checkin.interface';
import { CancelCheckinDto } from './cancel-checkin.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('cancelCheckin')
export class CancelCheckinController {
    constructor(
      private service: CancelCheckinService
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
    modelPost(@Body() cancelCheckinDto: CancelCheckinDto):  CancelCheckinInterface {
        return this.service.cancelCheckinService(cancelCheckinDto)
    }
}

