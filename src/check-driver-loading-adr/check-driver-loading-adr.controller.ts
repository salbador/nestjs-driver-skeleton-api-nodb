import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { CheckDriverLoadingAdrService } from './check-driver-loading-adr.service';
import { CheckDriverLoadingAdrInterface } from './check-driver-loading-adr.interface';
import { CheckDriverLoadingAdrDto } from './check-driver-loading-adr.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('checkDriverLoadingAdr')
export class CheckDriverLoadingAdrController {
    constructor(
      private service: CheckDriverLoadingAdrService
    ) {}
    @Post()
    async checkDriverLoadingAdrPost(@Body() userDto: UserDto): Promise<any>{
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
    modelCheckDriverLoadingAdrPost(@Body() checkDriverLoadingAdrDto: CheckDriverLoadingAdrDto):  CheckDriverLoadingAdrInterface {
        return this.service.checkDriverLoadingAdrService(checkDriverLoadingAdrDto)
    }
}

