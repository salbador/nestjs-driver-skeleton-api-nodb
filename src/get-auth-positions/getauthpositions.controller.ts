import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GetAuthPositionsService } from './getauthpositions.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('getauthpositions') // Swagger Tag Decorator
@Controller('getauthpositions')
export class GetAuthPositionsController {
    constructor(private getauthpositionsService: GetAuthPositionsService) {}

    @Get()
    getGetAuthPositions(): ITempletu[] {
        return this.getauthpositionsService.getGetAuthPositions()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.getauthpositionsService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getauthpositionsService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getauthpositionsService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.getauthpositionsService.deleteTempletu(id)
    }
}
