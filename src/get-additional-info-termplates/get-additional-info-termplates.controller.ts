import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { GetAdditionalInfoTermplatesService } from './get-additional-info-termplates.service';
import { GetAdditionalInfoTermplatesInterface } from './get-additional-info-termplates.interface';
import { GetAdditionalInfoTermplatesDto } from './get-additional-info-termplates.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('getAdditionalInfoTermplates')
export class GetAdditionalInfoTermplatesController {
    constructor(
      private service: GetAdditionalInfoTermplatesService
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
    modelPost(@Body() getAdditionalInfoTermplatesDto: GetAdditionalInfoTermplatesDto):  GetAdditionalInfoTermplatesInterface {
        return this.service.getAdditionalInfoTermplatesService(getAdditionalInfoTermplatesDto)
    }
}

