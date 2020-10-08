import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { SetAdditionalTerminalServicesService } from './set-additional-terminal-services.service';
import { SetAdditionalTerminalServicesInterface } from './set-additional-terminal-services.interface';
import { SetAdditionalTerminalServicesDto } from './set-additional-terminal-services.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('setAdditionalTerminalServices')
export class SetAdditionalTerminalServicesController {
    constructor(
      private service: SetAdditionalTerminalServicesService
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
    modelPost(@Body() setAdditionalTerminalServicesDto: SetAdditionalTerminalServicesDto):  SetAdditionalTerminalServicesInterface {
        return this.service.setAdditionalTerminalServicesService(setAdditionalTerminalServicesDto)
    }
}

