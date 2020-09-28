import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PrintDocumentsService } from './printdocuments.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('printdocuments') // Swagger Tag Decorator
@Controller('printdocuments')
export class PrintDocumentsController {
    constructor(private printdocumentsService: PrintDocumentsService) {}

    @Get()
    getPrintDocuments(): ITempletu[] {
        return this.printdocumentsService.getPrintDocuments()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.printdocumentsService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.printdocumentsService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.printdocumentsService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.printdocumentsService.deleteTempletu(id)
    }
}
