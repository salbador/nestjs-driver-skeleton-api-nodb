import { ApiProperty } from '@nestjs/swagger'
import { 
  DriverInterface, 
  CheckDriverInterface, 
  CultureInfoENUMInterface,
  ClientContextENUMInterface, 
  PersonInterface, 
  UserDataInterface, 
  UserIdDataInterface
} from './check-driver.interface';

export enum CultureInfoENUMDto {
  de = 'de',
  en = 'en',
  'de-DE' = 'de-DE',
  'en-EN' = 'en-EN',
  'es' = 'es',
  'es-MX' = 'es-MX',
  'es-SP' = 'es-SP'
}
export enum ClientContextENUMDto {
  TOCI = 'TOCI',
  TECI = 'TECI',
  TEOCI = 'TEOCI',
  TDCI = 'TDCI'
}
export class PersonDto {      
    @ApiProperty() 
    lastName: string; 
    @ApiProperty()
    firstName: string; 
    @ApiProperty()
    dateOfBirth: Date;
    @ApiProperty()
    nickname: string; 
    @ApiProperty()
    driverPin: string; 
}
export class UserIdDataDto extends PersonDto {}
export class DriverDto extends PersonDto {}

// export class UserDataDto {
//   @ApiProperty()
//   cultureInfo: CultureInfoENUMDto;
//   @ApiProperty() 
//   companyId: string; 
//   @ApiProperty()
//   clientContext: ClientContextENUMDto; 
//   @ApiProperty()
//   userIdData: UserIdDataDto; 
// }
export class UserDataDto {
  @ApiProperty({ name: 'CultureInfo', enum: CultureInfoENUMDto })
  cultureInfo: string;
  @ApiProperty() 
  companyId: string; 
  @ApiProperty({ name: 'ClientContext', enum: ClientContextENUMDto })
  clientContext: string; 
  @ApiProperty()
  userIdData: UserIdDataDto; 
}

export class CheckDriverDto {
  id: string
  @ApiProperty()
  location: string
  @ApiProperty() 
  userData: UserDataDto
  @ApiProperty() 
  driver: DriverDto
}
