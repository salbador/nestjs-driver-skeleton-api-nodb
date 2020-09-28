import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GetWeightService } from './getweight.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('getweight') // Swagger Tag Decorator
@Controller('getweight')
export class GetWeightController {
    constructor(private getweightService: GetWeightService) {}

    @Get()
    getGetWeight(): ITempletu[] {
        return this.getweightService.getGetWeight()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.getweightService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getweightService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getweightService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.getweightService.deleteTempletu(id)
    }
}
