import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CheckCompartmentPositionsService } from './checkcompartmentpositions.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('checkcompartmentpositions') // Swagger Tag Decorator
@Controller('checkcompartmentpositions')
export class CheckCompartmentPositionsController {
    constructor(private checkcompartmentpositionsService: CheckCompartmentPositionsService) {}

    @Get()
    getCheckCompartmentPositions(): ITempletu[] {
        return this.checkcompartmentpositionsService.getCheckCompartmentPositions()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.checkcompartmentpositionsService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkcompartmentpositionsService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkcompartmentpositionsService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.checkcompartmentpositionsService.deleteTempletu(id)
    }
}
