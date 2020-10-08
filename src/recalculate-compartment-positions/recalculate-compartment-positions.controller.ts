import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { RecalculateCompartmentPositionsService } from './recalculate-compartment-positions.service';
import { RecalculateCompartmentPositionsInterface } from './recalculate-compartment-positions.interface';
import { RecalculateCompartmentPositionsDto } from './recalculate-compartment-positions.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('recalculateCompartmentPositions')
export class RecalculateCompartmentPositionsController {
    constructor(
      private service: RecalculateCompartmentPositionsService
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
    modelPost(@Body() recalculateCompartmentPositionsDto: RecalculateCompartmentPositionsDto):  RecalculateCompartmentPositionsInterface {
        return this.service.recalculateCompartmentPositionsService(recalculateCompartmentPositionsDto)
    }
}

