import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CheckDriverService } from './check-driver.service';
import { CheckDriverInterface } from './check-driver.interface';
import { CheckDriverDTO } from './check-driver.dto';

import { ApiTags, ApiParam } from '@nestjs/swagger'

@ApiTags('checkDriver')    // Swagger Tag Decorator
@Controller('checkDriver')
export class CheckDriverController {
    constructor(private checkDriverService: CheckDriverService) {}

    @Post()
    createTempletu(@Body() checkDriverDTO: CheckDriverDTO): CheckDriverInterface {
        return this.checkDriverService.checkDriverService(checkDriverDTO)
    }

}
