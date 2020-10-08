import { Injectable } from '@nestjs/common';
import {
    DriverInterface,
    CheckDriverInterface,
    CultureInfoENUMInterface,
    ClientContextENUMInterface,
    PersonInterface,
    UserDataInterface,
    UserIdDataInterface
} from './check-driver.interface'
import {
    DriverDTO,
    CheckDriverDTO,
    CultureInfoENUMDTO,
    ClientContextENUMDTO,
    PersonDTO,
    UserDataDTO,
    UserIdDataDTO
} from './check-driver.dto'



let person1_dto: PersonDTO = {
    lastName: "John",
    firstName: "Doe", 
    dateOfBirth: new Date(), 
    nickname: "John Doe", 
    driverPin: "12093"
}

let person2_dto: PersonDTO = {
    lastName: "Jane",
    firstName: "Doe", 
    dateOfBirth: new Date(), 
    nickname: "Jane Doe",
    driverPin: "09182" 
}

let user1_id_data_dto: UserIdDataDTO = { ...person1_dto}
let user2_id_data_dto: UserIdDataDTO = { ...person2_dto}
let driver1_dto: DriverDTO = { ...person1_dto}
let driver2_dto: DriverDTO = { ...person2_dto}
let user1_data_dto: UserDataDTO = {
    cultureInfo: CultureInfoENUMDTO['de'],
    companyId: "022101",
    clientContext: ClientContextENUMDTO['TOCI'],
    userIdData: user1_id_data_dto
}
let user2_data_dto: UserDataDTO = {
    cultureInfo: CultureInfoENUMDTO['de'],
    companyId: "022101",
    clientContext: ClientContextENUMDTO['TOCI'],
    userIdData: user1_id_data_dto
}
let check_driver1_dto: CheckDriverDTO = {
    id: '0',
    location: "Hamburg",
    userData: user1_data_dto,
    driver: driver1_dto,
}
let check_driver2_dto: CheckDriverDTO = {
    id: '0',
    location: "Berlin",
    userData: user2_data_dto,
    driver: driver2_dto,
}
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
let users: UserDto[];
[
    {role: 'admin'},
    {role: 'editor'},
    {role: 'user', name: 'user1'},
    {role: 'user', name: 'user2'},
    {role: 'user', name: 'user3'},
].forEach(async user => {
    const prefix = user.name || user.role;
    const username = `${prefix}@example.org`;
    const name = faker.name.firstName() + ' ' + faker.name.lastName();
    const salt = await genSalt();
    const password = await hash(prefix, salt);
    let new_user: UserDto = {
        username: username, 
        name: name, 
        password, 
        role: Role[user.role], 
        salt: salt
    }
    users.push(new_user);
});
let max: number = users.length-1;
let min: number = 0;
let random_user = Math.floor(Math.random()*(max-min+1)+min)
let checkDrivers: CheckDriverDTO[];
checkDrivers.push({ id: '1', ...check_driver1_dto        })
checkDrivers.push({ id: '2', ...check_driver2_dto        })

@Injectable()
export class CheckDriverService {
    
    checkDriverService(checkDriverDTO: CheckDriverDTO): CheckDriverInterface {
        return checkDrivers[0]
    }
    checkDriverUserService(userDto: UserDto): User {
        return users[random_user]
    }
}
