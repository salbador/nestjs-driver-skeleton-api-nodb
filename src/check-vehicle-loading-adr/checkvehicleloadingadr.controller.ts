import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CheckVehicleLoadingAdrService } from './checkvehicleloadingadr.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('checkvehicleloadingadr') // Swagger Tag Decorator
@Controller('checkvehicleloadingadr')
export class CheckVehicleLoadingAdrController {
    constructor(private checkvehicleloadingadrService: CheckVehicleLoadingAdrService) {}

    @Get()
    getCheckVehicleLoadingAdr(): ITempletu[] {
        return this.checkvehicleloadingadrService.getCheckVehicleLoadingAdr()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.checkvehicleloadingadrService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkvehicleloadingadrService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkvehicleloadingadrService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.checkvehicleloadingadrService.deleteTempletu(id)
    }
}
