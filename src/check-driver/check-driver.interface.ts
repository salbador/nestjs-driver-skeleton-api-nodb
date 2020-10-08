import { ApiProperty } from '@nestjs/swagger'
export interface CultureInfoENUMInterface {
  de?: string
  en?: string
  'de-DE'?: string
  'en-EN'?: string
  'es'?: string
  'es-MX'?: string
  'es-SP'?: string
}
export interface ClientContextENUMInterface {
  TOCI?: string
  TECI?: string
  TEOCI?: string
  TDCI?: string
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
