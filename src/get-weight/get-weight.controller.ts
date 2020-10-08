import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { GetWeightService } from './get-weight.service';
import { GetWeightInterface } from './get-weight.interface';
import { GetWeightDto } from './get-weight.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('getWeight')
export class GetWeightController {
    constructor(
      private service: GetWeightService
    ) {}
    @Post()
    async getWeightPost(@Body() userDto: UserDto): Promise<any>{
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
    modelGetWeightPost(@Body() getWeightDto: GetWeightDto):  GetWeightInterface {
        return this.service.getWeightService(getWeightDto)
    }
}

