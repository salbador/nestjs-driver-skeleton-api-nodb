import { Module } from '@nestjs/common';
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiProperty, ApiTags, ApiParam } from '@nestjs/swagger'
import * as faker from 'faker';
import {hash, genSalt} from 'bcryptjs';
import { Injectable } from '@nestjs/common';
// import {IsNotEmpty, IsString} from 'class-validator';

export enum Role {
  admin = 'admin',
  editor = 'editor',
  user = 'user'
}

export interface UserInterface {
  readonly username: string;
  readonly name: string;
  readonly password: string;
  readonly role: Role;
}

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

  // @IsString()
  // @IsNotEmpty()
  @ApiProperty()
  readonly password: string;

  // @IsString()
  // @IsNotEmpty()
  @ApiProperty()
  readonly salt: string;
}
const users: Promise<UserDto>[] = [
  {role: 'admin'},
  {role: 'editor'},
  {role: 'user', name: 'user1'},
  {role: 'user', name: 'user2'},
  {role: 'user', name: 'user3'},
].map(async user => {
  const prefix = user.name || user.role;
  const username = `${prefix}@example.org`;
  const name = faker.name.firstName() + ' ' + faker.name.lastName();
  const salt = await genSalt();
  const password = await hash(prefix, salt);
  const newUser: UserDto = {
    username: username,
    name: name,
    password,
    role: Role[user.role],
    salt: salt
  }
  // users.push(newUser);
  return newUser;
});

export async function randomUserId(users) {
  const min = 0;
  const max: number = await users.length-1;
  return Math.floor(Math.random()*(max-min+1)+min);
}

@Injectable()
export class UserService {
  async post(userDto: UserDto): Promise<UserInterface> {
    const index = await randomUserId(users);
    const result = await users[index];
    return result
  }
}


@ApiTags('user')    // Swagger Tag Decorator
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Post()
  async post(@Body() userDto: UserDto): Promise<UserInterface> {
    const result = await this.userService.post(userDto);
    return result
  }
}

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
