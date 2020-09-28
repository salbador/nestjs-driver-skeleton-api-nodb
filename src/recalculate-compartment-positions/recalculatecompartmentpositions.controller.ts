import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RecalculateCompartmentPositionsService } from './recalculatecompartmentpositions.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('recalculatecompartmentpositions') // Swagger Tag Decorator
@Controller('recalculatecompartmentpositions')
export class RecalculateCompartmentPositionsController {
    constructor(private recalculatecompartmentpositionsService: RecalculateCompartmentPositionsService) {}

    @Get()
    getRecalculateCompartmentPositions(): ITempletu[] {
        return this.recalculatecompartmentpositionsService.getRecalculateCompartmentPositions()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.recalculatecompartmentpositionsService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.recalculatecompartmentpositionsService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.recalculatecompartmentpositionsService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.recalculatecompartmentpositionsService.deleteTempletu(id)
    }
}
