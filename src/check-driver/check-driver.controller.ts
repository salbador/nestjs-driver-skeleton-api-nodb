import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CheckDriverService } from './check-driver.service';
import { CheckDriverInterface } from './check-driver.interface';
import { CheckDriverDTO } from './check-driver.dto';

import { ApiTags, ApiParam } from '@nestjs/swagger'
export enum Role {
    admin = 'admin',
    editor = 'editor',
    user = 'user'
}

export interface User {
    readonly username: string;
    readonly name: string;
    readonly password: string;
    readonly role: Role;
}
// import {IsNotEmpty, IsString} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
import * as faker from 'faker';
import {hash, genSalt} from 'bcryptjs';
export class UserDto {
    // @IsString()
    // @IsNotEmpty()
    @ApiProperty()
    readonly username: string;

    // @IsString()
    // @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    // @IsString()
    // @IsNotEmpty()
    @ApiProperty()
    readonly role: Role;
    @ApiProperty()
    readonly password: string;
    @ApiProperty()
    readonly salt: string;
}
@ApiTags('checkDriver')    // Swagger Tag Decorator
@Controller('checkDriver')
export class CheckDriverController {
    constructor(
        private checkDriverService: CheckDriverService,
        private userService: CheckDriverService
        ) {}

    @Post()
    checkDriverPost(@Body() checkDriverDTO: CheckDriverDTO): CheckDriverInterface {
        return this.checkDriverService.checkDriverService(checkDriverDTO)
    }

    @Get('/user')
    checkDriverUserPost(@Body() userDto: UserDto): User {
        return this.userService.checkDriverUserService(userDto)
    }

}
