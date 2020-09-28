import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SetAdditionalTerminalServicesService } from './setadditionalterminalservices.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('setadditionalterminalservices') // Swagger Tag Decorator
@Controller('setadditionalterminalservices')
export class SetAdditionalTerminalServicesController {
    constructor(private setadditionalterminalservicesService: SetAdditionalTerminalServicesService) {}

    @Get()
    getSetAdditionalTerminalServices(): ITempletu[] {
        return this.setadditionalterminalservicesService.getSetAdditionalTerminalServices()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.setadditionalterminalservicesService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.setadditionalterminalservicesService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.setadditionalterminalservicesService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.setadditionalterminalservicesService.deleteTempletu(id)
    }
}
