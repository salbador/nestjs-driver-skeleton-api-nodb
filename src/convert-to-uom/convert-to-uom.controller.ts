import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { ConvertToUomService } from './convert-to-uom.service';
import { ConvertToUomInterface } from './convert-to-uom.interface';
import { ConvertToUomDto } from './convert-to-uom.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('convertToUom')
export class ConvertToUomController {
    constructor(
      private service: ConvertToUomService
    ) {}
    @Post()
    async convertToUomPost(@Body() userDto: UserDto): Promise<any>{
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
    modelConvertToUomPost(@Body() convertToUomDto: ConvertToUomDto):  ConvertToUomInterface {
        return this.service.convertToUomService(convertToUomDto)
    }
}

