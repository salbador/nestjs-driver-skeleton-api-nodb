import { ApiProperty } from '@nestjs/swagger'
import {   DriverDto, 
  CheckDriverDto, 
  CultureInfoENUMDto,
  ClientContextENUMDto, 
  PersonDto, 
  UserDataDto, 
  UserIdDataDto } from './check-driver.dto';

export type CultureInfoENUMInterface = {
    [key in CultureInfoENUMDto]?: string
}
export type ClientContextENUMInterface = {
    [key in ClientContextENUMDto]?: string
}

export interface PersonInterface {      
    lastName: string 
    firstName: string 
    dateOfBirth: Date 
    nickname: string 
    driverPin: string 
}
export interface UserIdDataInterface extends PersonInterface {}

export interface UserDataInterface {
  cultureInfo: string 
  companyId: string 
  clientContext: string 
  userIdData: UserIdDataInterface 
}

export interface DriverInterface extends PersonInterface {}
export interface CheckDriverInterface {
  id?: string
  location: string
  userData: UserDataInterface
  driver: DriverInterface
}
