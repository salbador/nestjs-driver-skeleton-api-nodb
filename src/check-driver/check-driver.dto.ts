import { ApiProperty } from '@nestjs/swagger'
import { UserDataDto } from '../../dtos/user-data.dto'
import { DriverDto } from '../../dtos/driver.dto'

export class CheckDriverDto {
  id: string
  @ApiProperty()
  location: string
  @ApiProperty()
  userData: UserDataDto
  @ApiProperty()
  driver: DriverDto
}
