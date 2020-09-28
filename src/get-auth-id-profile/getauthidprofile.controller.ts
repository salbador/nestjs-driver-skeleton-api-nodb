import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GetAuthIdProfileService } from './getauthidprofile.service';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('getauthidprofile') // Swagger Tag Decorator
@Controller('getauthidprofile')
export class GetAuthIdProfileController {
    constructor(private getauthidprofileService: GetAuthIdProfileService) {}

    @Get()
    getGetAuthIdProfile(): ITempletu[] {
        return this.getauthidprofileService.getGetAuthIdProfile()
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getTempletu(@Param() param): ITempletu {
        return this.getauthidprofileService.getTempletu(param.id)
    }

    @Post()
    createTempletu(@Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getauthidprofileService.createTempletu(templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    editTempletu(@Param('id') id, @Body() templetuDTO: TempletuDTO): ITempletu {
        return this.getauthidprofileService.editTempletu(id, templetuDTO)
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteTempletu(@Param('id') id) {
        this.getauthidprofileService.deleteTempletu(id)
    }
}
