import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ConvertToUomService } from './converttouom.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('converttouom') // Swagger Tag Decorator
@Controller('converttouom')
export class ConvertToUomController {
    constructor(private converttouomService: ConvertToUomService) {}

    @Get()
    getConvertToUom(): ITempletu[] {
        return this.converttouomService.getConvertToUom()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.converttouomService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.converttouomService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.converttouomService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.converttouomService.deleteTempletu(id)
    }
}
