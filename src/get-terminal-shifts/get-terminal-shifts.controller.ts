import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { GetTerminalShiftsService } from './get-terminal-shifts.service';
import { GetTerminalShiftsInterface } from './get-terminal-shifts.interface';
import { GetTerminalShiftsDto } from './get-terminal-shifts.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('getTerminalShifts')
export class GetTerminalShiftsController {
    constructor(
      private service: GetTerminalShiftsService
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
    modelPost(@Body() getTerminalShiftsDto: GetTerminalShiftsDto):  GetTerminalShiftsInterface {
        return this.service.getTerminalShiftsService(getTerminalShiftsDto)
    }
}

