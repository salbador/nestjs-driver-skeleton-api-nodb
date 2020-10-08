import { ApiProperty } from '@nestjs/swagger'

export class LocationDto {
  id: string
  @ApiProperty()
  name: string
}
