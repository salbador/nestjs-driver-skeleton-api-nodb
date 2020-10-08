import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { CheckAdditionalInformationService } from './check-additional-information.service';
import { CheckAdditionalInformationInterface } from './check-additional-information.interface';
import { CheckAdditionalInformationDto } from './check-additional-information.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('checkAdditionalInformation')
export class CheckAdditionalInformationController {
    constructor(
      private service: CheckAdditionalInformationService
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
    modelPost(@Body() checkAdditionalInformationDto: CheckAdditionalInformationDto):  CheckAdditionalInformationInterface {
        return this.service.checkAdditionalInformationService(checkAdditionalInformationDto)
    }
}

