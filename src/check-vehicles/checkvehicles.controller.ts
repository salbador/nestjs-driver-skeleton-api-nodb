import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CheckVehiclesService } from './checkvehicles.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('checkvehicles') // Swagger Tag Decorator
@Controller('checkvehicles')
export class CheckVehiclesController {
    constructor(private checkvehiclesService: CheckVehiclesService) {}

    @Get()
    getCheckVehicles(): ITempletu[] {
        return this.checkvehiclesService.getCheckVehicles()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.checkvehiclesService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkvehiclesService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkvehiclesService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.checkvehiclesService.deleteTempletu(id)
    }
}
