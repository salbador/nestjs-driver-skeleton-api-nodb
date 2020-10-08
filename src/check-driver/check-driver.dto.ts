import { ApiProperty } from '@nestjs/swagger'
import {
    DriverInterface,
    CheckDriverInterface,
    CultureInfoENUMInterface,
    ClientContextENUMInterface,
    PersonInterface,
    UserDataInterface,
    UserIdDataInterface
} from './check-driver.interface'

export enum CultureInfoENUMDTO {
    de = 'de',
    en = 'en',
    'de-DE' = 'de-DE',
    'en-EN' = 'en-EN',
    'es' = 'es',
    'es-MX' = 'es-MX',
    'es-SP' = 'es-SP'
}

export enum ClientContextENUMDTO {
    TOCI = 'TOCI',
    TECI = 'TECI',
    TEOCI = 'TEOCI',
    TDCI = 'TDCI'
}

export class PersonDTO {
    id: string

    @ApiProperty()
    lastName: string

    @ApiProperty()
    firstName: string

    @ApiProperty()
    dateOfBirth: Date

    @ApiProperty()
    nickname: string

    @ApiProperty()
    driverPin: string
}

export class UserIdDataDTO extends PersonDTO {}
export class DriverDTO extends PersonDTO {}

export class UserDataDTO {
    @ApiProperty()
    cultureInfo: CultureInfoENUMDTO
    @ApiProperty()
    companyId: string
    @ApiProperty()
    clientContext: ClientContextENUMDTO
    @ApiProperty()
    userIdData: UserIdDataDTO
}

export class CheckDriverDTO {
    id: string
    @ApiProperty()
    location: string 
    @ApiProperty()
    userData: UserDataDTO
    @ApiProperty()
    driver: DriverDTO
}






