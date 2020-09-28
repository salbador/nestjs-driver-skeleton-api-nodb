import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CheckDriverService } from './checkdriver.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('checkdriver') // Swagger Tag Decorator
@Controller('checkdriver')
export class CheckDriverController {
    constructor(private checkdriverService: CheckDriverService) {}

    @Get()
    getCheckDriver(): ITempletu[] {
        return this.checkdriverService.getCheckDriver()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.checkdriverService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkdriverService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkdriverService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.checkdriverService.deleteTempletu(id)
    }
}
