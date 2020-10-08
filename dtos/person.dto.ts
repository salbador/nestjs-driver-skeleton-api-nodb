import { ApiProperty } from '@nestjs/swagger'

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
