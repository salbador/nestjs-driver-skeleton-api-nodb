import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CheckDriverService } from './check-driver.service';
import { CheckDriverInterface } from './check-driver.interface';
import { CheckDriverDTO } from './check-driver.dto';

import { ApiTags, ApiParam } from '@nestjs/swagger'

@Controller('checkDriver')
export class CheckDriverController {
    constructor(private checkdriverService: CheckDriverService) {}
    @Post()
    checkDriverPost(@Body() checkDriverDTO: CheckDriverDTO):  CheckDriverInterface {
        return this.checkdriverService.checkDriverService(checkDriverDTO)
    }
}
