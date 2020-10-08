import { ApiProperty } from '@nestjs/swagger'

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

