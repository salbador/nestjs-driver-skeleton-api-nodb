import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TempletusService } from './templetus.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('templetus') // Swagger Tag Decorator
@Controller('templetus')
export class TempletusController {
    constructor(private templetusService: TempletusService) {}

    @Get()
    getTempletus(): ITempletu[] {
        return this.templetusService.getTempletus()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.templetusService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.templetusService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.templetusService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.templetusService.deleteTempletu(id)
    }
}
