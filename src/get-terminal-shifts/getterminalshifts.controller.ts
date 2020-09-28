import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GetTerminalShiftsService } from './getterminalshifts.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('getterminalshifts') // Swagger Tag Decorator
@Controller('getterminalshifts')
export class GetTerminalShiftsController {
    constructor(private getterminalshiftsService: GetTerminalShiftsService) {}

    @Get()
    getGetTerminalShifts(): ITempletu[] {
        return this.getterminalshiftsService.getGetTerminalShifts()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.getterminalshiftsService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getterminalshiftsService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getterminalshiftsService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.getterminalshiftsService.deleteTempletu(id)
    }
}
