import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GetCheckinHeadersService } from './getcheckinheaders.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('getcheckinheaders') // Swagger Tag Decorator
@Controller('getcheckinheaders')
export class GetCheckinHeadersController {
    constructor(private getcheckinheadersService: GetCheckinHeadersService) {}

    @Get()
    getGetCheckinHeaders(): ITempletu[] {
        return this.getcheckinheadersService.getGetCheckinHeaders()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.getcheckinheadersService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getcheckinheadersService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getcheckinheadersService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.getcheckinheadersService.deleteTempletu(id)
    }
}
