import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GetPrintableDocumentsService } from './getprintabledocuments.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('getprintabledocuments') // Swagger Tag Decorator
@Controller('getprintabledocuments')
export class GetPrintableDocumentsController {
    constructor(private getprintabledocumentsService: GetPrintableDocumentsService) {}

    @Get()
    getGetPrintableDocuments(): ITempletu[] {
        return this.getprintabledocumentsService.getGetPrintableDocuments()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.getprintabledocumentsService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getprintabledocumentsService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getprintabledocumentsService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.getprintabledocumentsService.deleteTempletu(id)
    }
}
