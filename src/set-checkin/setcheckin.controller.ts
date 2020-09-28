import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SetCheckinService } from './setcheckin.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('setcheckin') // Swagger Tag Decorator
@Controller('setcheckin')
export class SetCheckinController {
    constructor(private setcheckinService: SetCheckinService) {}

    @Get()
    getSetCheckin(): ITempletu[] {
        return this.setcheckinService.getSetCheckin()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.setcheckinService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.setcheckinService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.setcheckinService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.setcheckinService.deleteTempletu(id)
    }
}
