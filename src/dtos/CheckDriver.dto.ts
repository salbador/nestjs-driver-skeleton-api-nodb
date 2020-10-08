import { ApiProperty } from '@nestjs/swagger'
import { UserDataDTO } from '../dtos/UserData.dto'
import { DriverDTO } from '../dtos/Driver.dto'


export class CheckDriverDTO {
    @ApiProperty()
    location: string 
    @ApiProperty()
    userData: UserDataDTO
    @ApiProperty()
    driver: DriverDTO
}
