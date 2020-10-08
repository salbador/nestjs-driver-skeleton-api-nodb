import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { PrintDocumentsService } from './print-documents.service';
import { PrintDocumentsInterface } from './print-documents.interface';
import { PrintDocumentsDto } from './print-documents.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('printDocuments')
export class PrintDocumentsController {
    constructor(
      private service: PrintDocumentsService
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
    modelPost(@Body() printDocumentsDto: PrintDocumentsDto):  PrintDocumentsInterface {
        return this.service.printDocumentsService(printDocumentsDto)
    }
}

