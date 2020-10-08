import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { CheckPreloadingsService } from './check-preloadings.service';
import { CheckPreloadingsInterface } from './check-preloadings.interface';
import { CheckPreloadingsDto } from './check-preloadings.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('checkPreloadings')
export class CheckPreloadingsController {
    constructor(
      private service: CheckPreloadingsService
    ) {}
    @Post()
    async checkPreloadingsPost(@Body() userDto: UserDto): Promise<any>{
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
    modelCheckPreloadingsPost(@Body() checkPreloadingsDto: CheckPreloadingsDto):  CheckPreloadingsInterface {
        return this.service.checkPreloadingsService(checkPreloadingsDto)
    }
}

