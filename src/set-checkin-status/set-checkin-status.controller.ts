import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { SetCheckinStatusService } from './set-checkin-status.service';
import { SetCheckinStatusInterface } from './set-checkin-status.interface';
import { SetCheckinStatusDto } from './set-checkin-status.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('setCheckinStatus')
export class SetCheckinStatusController {
    constructor(
      private service: SetCheckinStatusService
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
    modelPost(@Body() setCheckinStatusDto: SetCheckinStatusDto):  SetCheckinStatusInterface {
        return this.service.setCheckinStatusService(setCheckinStatusDto)
    }
}

