import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SetCheckinStatusService } from './setcheckinstatus.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('setcheckinstatus') // Swagger Tag Decorator
@Controller('setcheckinstatus')
export class SetCheckinStatusController {
    constructor(private setcheckinstatusService: SetCheckinStatusService) {}

    @Get()
    getSetCheckinStatus(): ITempletu[] {
        return this.setcheckinstatusService.getSetCheckinStatus()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.setcheckinstatusService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.setcheckinstatusService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.setcheckinstatusService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.setcheckinstatusService.deleteTempletu(id)
    }
}
