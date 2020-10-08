import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { CheckVehiclesService } from './check-vehicles.service';
import { CheckVehiclesInterface } from './check-vehicles.interface';
import { CheckVehiclesDto } from './check-vehicles.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('checkVehicles')
export class CheckVehiclesController {
    constructor(
      private service: CheckVehiclesService
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
    modelPost(@Body() checkVehiclesDto: CheckVehiclesDto):  CheckVehiclesInterface {
        return this.service.checkVehiclesService(checkVehiclesDto)
    }
}

