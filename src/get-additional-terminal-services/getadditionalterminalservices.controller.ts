import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GetAdditionalTerminalServicesService } from './getadditionalterminalservices.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('getadditionalterminalservices') // Swagger Tag Decorator
@Controller('getadditionalterminalservices')
export class GetAdditionalTerminalServicesController {
    constructor(private getadditionalterminalservicesService: GetAdditionalTerminalServicesService) {}

    @Get()
    getGetAdditionalTerminalServices(): ITempletu[] {
        return this.getadditionalterminalservicesService.getGetAdditionalTerminalServices()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.getadditionalterminalservicesService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getadditionalterminalservicesService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getadditionalterminalservicesService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.getadditionalterminalservicesService.deleteTempletu(id)
    }
}
