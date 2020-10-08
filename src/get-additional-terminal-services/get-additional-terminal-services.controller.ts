import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { GetAdditionalTerminalServicesService } from './get-additional-terminal-services.service';
import { GetAdditionalTerminalServicesInterface } from './get-additional-terminal-services.interface';
import { GetAdditionalTerminalServicesDto } from './get-additional-terminal-services.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('getAdditionalTerminalServices')
export class GetAdditionalTerminalServicesController {
    constructor(
      private service: GetAdditionalTerminalServicesService
    ) {}
    @Post()
    async getAdditionalTerminalServicesPost(@Body() userDto: UserDto): Promise<any>{
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
    modelGetAdditionalTerminalServicesPost(@Body() getAdditionalTerminalServicesDto: GetAdditionalTerminalServicesDto):  GetAdditionalTerminalServicesInterface {
        return this.service.getAdditionalTerminalServicesService(getAdditionalTerminalServicesDto)
    }
}

