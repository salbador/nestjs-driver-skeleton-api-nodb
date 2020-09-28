import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CheckAdditionalInformationService } from './checkadditionalinformation.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('checkadditionalinformation') // Swagger Tag Decorator
@Controller('checkadditionalinformation')
export class CheckAdditionalInformationController {
    constructor(private checkadditionalinformationService: CheckAdditionalInformationService) {}

    @Get()
    getCheckAdditionalInformation(): ITempletu[] {
        return this.checkadditionalinformationService.getCheckAdditionalInformation()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.checkadditionalinformationService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkadditionalinformationService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.checkadditionalinformationService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.checkadditionalinformationService.deleteTempletu(id)
    }
}
