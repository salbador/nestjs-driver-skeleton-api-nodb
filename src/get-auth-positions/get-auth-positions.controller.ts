import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { GetAuthPositionsService } from './get-auth-positions.service';
import { GetAuthPositionsInterface } from './get-auth-positions.interface';
import { GetAuthPositionsDto } from './get-auth-positions.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('getAuthPositions')
export class GetAuthPositionsController {
    constructor(
      private service: GetAuthPositionsService
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
    modelPost(@Body() getAuthPositionsDto: GetAuthPositionsDto):  GetAuthPositionsInterface {
        return this.service.getAuthPositionsService(getAuthPositionsDto)
    }
}

