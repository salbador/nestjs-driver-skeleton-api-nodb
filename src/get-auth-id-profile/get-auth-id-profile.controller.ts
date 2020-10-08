import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { GetAuthIdProfileService } from './get-auth-id-profile.service';
import { GetAuthIdProfileInterface } from './get-auth-id-profile.interface';
import { GetAuthIdProfileDto } from './get-auth-id-profile.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('getAuthIdProfile')
export class GetAuthIdProfileController {
    constructor(
      private service: GetAuthIdProfileService
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
    modelPost(@Body() getAuthIdProfileDto: GetAuthIdProfileDto):  GetAuthIdProfileInterface {
        return this.service.getAuthIdProfileService(getAuthIdProfileDto)
    }
}

