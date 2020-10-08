import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { InitiateWeigingService } from './initiate-weiging.service';
import { InitiateWeigingInterface } from './initiate-weiging.interface';
import { InitiateWeigingDto } from './initiate-weiging.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('initiateWeiging')
export class InitiateWeigingController {
    constructor(
      private service: InitiateWeigingService
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
    modelPost(@Body() initiateWeigingDto: InitiateWeigingDto):  InitiateWeigingInterface {
        return this.service.initiateWeigingService(initiateWeigingDto)
    }
}

