import { ApiProperty } from '@nestjs/swagger'
import {   DriverDTO, 
  CheckDriverDTO, 
  CultureInfoENUMDTO,
  ClientContextENUMDTO, 
  PersonDTO, 
  UserDataDTO, 
  UserIdDataDTO } from './check-driver.dto';

export type CultureInfoENUMInterface = {
    [key in CultureInfoENUMDTO]?: string
}
export type ClientContextENUMInterface = {
    [key in ClientContextENUMDTO]?: string
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
