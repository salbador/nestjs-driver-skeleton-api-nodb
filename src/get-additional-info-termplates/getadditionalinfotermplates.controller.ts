import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GetAdditionalInfoTermplatesService } from './getadditionalinfotermplates.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('getadditionalinfotermplates') // Swagger Tag Decorator
@Controller('getadditionalinfotermplates')
export class GetAdditionalInfoTermplatesController {
    constructor(private getadditionalinfotermplatesService: GetAdditionalInfoTermplatesService) {}

    @Get()
    getGetAdditionalInfoTermplates(): ITempletu[] {
        return this.getadditionalinfotermplatesService.getGetAdditionalInfoTermplates()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.getadditionalinfotermplatesService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getadditionalinfotermplatesService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getadditionalinfotermplatesService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.getadditionalinfotermplatesService.deleteTempletu(id)
    }
}
