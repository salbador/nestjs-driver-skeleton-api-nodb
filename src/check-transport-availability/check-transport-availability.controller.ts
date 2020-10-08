import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { CheckTransportAvailabilityService } from './check-transport-availability.service';
import { CheckTransportAvailabilityInterface } from './check-transport-availability.interface';
import { CheckTransportAvailabilityDto } from './check-transport-availability.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('checkTransportAvailability')
export class CheckTransportAvailabilityController {
    constructor(
      private service: CheckTransportAvailabilityService
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
    modelPost(@Body() checkTransportAvailabilityDto: CheckTransportAvailabilityDto):  CheckTransportAvailabilityInterface {
        return this.service.checkTransportAvailabilityService(checkTransportAvailabilityDto)
    }
}

