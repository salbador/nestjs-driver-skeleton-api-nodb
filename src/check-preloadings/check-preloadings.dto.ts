import { ApiProperty } from '@nestjs/swagger'
import { UserDataDto } from '../../dtos/user-data.dto'
import { CheckinDto } from '../../dtos/checkin.dto'

export class CheckPreloadingsDto {
  id: string
  @ApiProperty()
  location: string
  @ApiProperty()
  userData: UserDataDto
  @ApiProperty()
  checkin: CheckinDto
}
