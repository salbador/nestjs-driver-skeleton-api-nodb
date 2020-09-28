import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GetCheckinService } from './getcheckin.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('getcheckin') // Swagger Tag Decorator
@Controller('getcheckin')
export class GetCheckinController {
    constructor(private getcheckinService: GetCheckinService) {}

    @Get()
    getGetCheckin(): ITempletu[] {
        return this.getcheckinService.getGetCheckin()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.getcheckinService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getcheckinService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getcheckinService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.getcheckinService.deleteTempletu(id)
    }
}
