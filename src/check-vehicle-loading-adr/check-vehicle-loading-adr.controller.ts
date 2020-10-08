import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { CheckVehicleLoadingAdrService } from './check-vehicle-loading-adr.service';
import { CheckVehicleLoadingAdrInterface } from './check-vehicle-loading-adr.interface';
import { CheckVehicleLoadingAdrDto } from './check-vehicle-loading-adr.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('checkVehicleLoadingAdr')
export class CheckVehicleLoadingAdrController {
    constructor(
      private service: CheckVehicleLoadingAdrService
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
    modelPost(@Body() checkVehicleLoadingAdrDto: CheckVehicleLoadingAdrDto):  CheckVehicleLoadingAdrInterface {
        return this.service.checkVehicleLoadingAdrService(checkVehicleLoadingAdrDto)
    }
}

