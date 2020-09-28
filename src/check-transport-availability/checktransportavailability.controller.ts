import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CheckTransportAvailabilityService } from './checktransportavailability.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('checktransportavailability') // Swagger Tag Decorator
@Controller('checktransportavailability')
export class CheckTransportAvailabilityController {
    constructor(private checktransportavailabilityService: CheckTransportAvailabilityService) {}

    @Get()
    getCheckTransportAvailability(): ITempletu[] {
        return this.checktransportavailabilityService.getCheckTransportAvailability()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.checktransportavailabilityService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checktransportavailabilityService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checktransportavailabilityService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.checktransportavailabilityService.deleteTempletu(id)
    }
}
