import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GetVehicleInfoService } from './getvehicleinfo.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('getvehicleinfo') // Swagger Tag Decorator
@Controller('getvehicleinfo')
export class GetVehicleInfoController {
    constructor(private getvehicleinfoService: GetVehicleInfoService) {}

    @Get()
    getGetVehicleInfo(): ITempletu[] {
        return this.getvehicleinfoService.getGetVehicleInfo()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.getvehicleinfoService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getvehicleinfoService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getvehicleinfoService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.getvehicleinfoService.deleteTempletu(id)
    }
}
