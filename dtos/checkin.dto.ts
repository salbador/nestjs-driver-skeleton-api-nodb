import { ApiProperty } from '@nestjs/swagger'

export class CheckinDto {
  id: string
  @ApiProperty()
  name: string
}
