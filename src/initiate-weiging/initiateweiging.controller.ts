import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InitiateWeigingService } from './initiateweiging.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('initiateweiging') // Swagger Tag Decorator
@Controller('initiateweiging')
export class InitiateWeigingController {
    constructor(private initiateweigingService: InitiateWeigingService) {}

    @Get()
    getInitiateWeiging(): ITempletu[] {
        return this.initiateweigingService.getInitiateWeiging()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.initiateweigingService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.initiateweigingService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.initiateweigingService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.initiateweigingService.deleteTempletu(id)
    }
}
