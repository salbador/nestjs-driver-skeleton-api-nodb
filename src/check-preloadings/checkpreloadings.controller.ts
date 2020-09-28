import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CheckPreloadingsService } from './checkpreloadings.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('checkpreloadings') // Swagger Tag Decorator
@Controller('checkpreloadings')
export class CheckPreloadingsController {
    constructor(private checkpreloadingsService: CheckPreloadingsService) {}

    @Get()
    getCheckPreloadings(): ITempletu[] {
        return this.checkpreloadingsService.getCheckPreloadings()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.checkpreloadingsService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkpreloadingsService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkpreloadingsService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.checkpreloadingsService.deleteTempletu(id)
    }
}
