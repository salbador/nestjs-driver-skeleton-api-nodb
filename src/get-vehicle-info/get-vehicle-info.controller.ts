import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { GetVehicleInfoService } from './get-vehicle-info.service';
import { GetVehicleInfoInterface } from './get-vehicle-info.interface';
import { GetVehicleInfoDto } from './get-vehicle-info.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('getVehicleInfo')
export class GetVehicleInfoController {
    constructor(
      private service: GetVehicleInfoService
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
    modelPost(@Body() getVehicleInfoDto: GetVehicleInfoDto):  GetVehicleInfoInterface {
        return this.service.getVehicleInfoService(getVehicleInfoDto)
    }
}

