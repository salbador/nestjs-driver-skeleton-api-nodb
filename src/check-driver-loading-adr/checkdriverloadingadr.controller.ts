import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CheckDriverLoadingAdrService } from './checkdriverloadingadr.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('checkdriverloadingadr') // Swagger Tag Decorator
@Controller('checkdriverloadingadr')
export class CheckDriverLoadingAdrController {
    constructor(private checkdriverloadingadrService: CheckDriverLoadingAdrService) {}

    @Get()
    getCheckDriverLoadingAdr(): ITempletu[] {
        return this.checkdriverloadingadrService.getCheckDriverLoadingAdr()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.checkdriverloadingadrService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkdriverloadingadrService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkdriverloadingadrService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.checkdriverloadingadrService.deleteTempletu(id)
    }
}
