import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { GetPrintableDocumentsService } from './get-printable-documents.service';
import { GetPrintableDocumentsInterface } from './get-printable-documents.interface';
import { GetPrintableDocumentsDto } from './get-printable-documents.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('getPrintableDocuments')
export class GetPrintableDocumentsController {
    constructor(
      private service: GetPrintableDocumentsService
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
    modelPost(@Body() getPrintableDocumentsDto: GetPrintableDocumentsDto):  GetPrintableDocumentsInterface {
        return this.service.getPrintableDocumentsService(getPrintableDocumentsDto)
    }
}

