import { ApiProperty } from '@nestjs/swagger'

export class TempletuDTO {
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