import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { CheckCompartmentPositionsService } from './check-compartment-positions.service';
import { CheckCompartmentPositionsInterface } from './check-compartment-positions.interface';
import { CheckCompartmentPositionsDto } from './check-compartment-positions.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('checkCompartmentPositions')
export class CheckCompartmentPositionsController {
    constructor(
      private service: CheckCompartmentPositionsService
    ) {}
    @Post()
    async checkCompartmentPositionsPost(@Body() userDto: UserDto): Promise<any>{
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
    modelCheckCompartmentPositionsPost(@Body() checkCompartmentPositionsDto: CheckCompartmentPositionsDto):  CheckCompartmentPositionsInterface {
        return this.service.checkCompartmentPositionsService(checkCompartmentPositionsDto)
    }
}

