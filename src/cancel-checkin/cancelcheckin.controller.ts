import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CancelCheckinService } from './cancelcheckin.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('cancelcheckin') // Swagger Tag Decorator
@Controller('cancelcheckin')
export class CancelCheckinController {
    constructor(private cancelcheckinService: CancelCheckinService) {}

    @Get()
    getCancelCheckin(): ITempletu[] {
        return this.cancelcheckinService.getCancelCheckin()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.cancelcheckinService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.cancelcheckinService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.cancelcheckinService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.cancelcheckinService.deleteTempletu(id)
    }
}