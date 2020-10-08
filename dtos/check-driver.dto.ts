import { ApiProperty } from '@nestjs/swagger'
import { UserDataDto } from './user-data.dto'
import { DriverDto } from './driver.dto'

export class CheckDriverDto {
  id: string
  @ApiProperty()
  location: string
  @ApiProperty()
  userData: UserDataDto
  @ApiProperty()
  driver: DriverDto
}
