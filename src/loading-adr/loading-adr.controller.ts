import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { LoadingAdrService } from './loading-adr.service';
import { LoadingAdrInterface } from './loading-adr.interface';
import { LoadingAdrDto } from './loading-adr.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('loadingAdr')
export class LoadingAdrController {
    constructor(
      private service: LoadingAdrService
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
    modelPost(@Body() loadingAdrDto: LoadingAdrDto):  LoadingAdrInterface {
        return this.service.loadingAdrService(loadingAdrDto)
    }
}

