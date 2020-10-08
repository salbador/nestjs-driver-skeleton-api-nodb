import { ApiProperty } from '@nestjs/swagger'

export class CheckTransportAvailabilityDto {
  id: string
  @ApiProperty()
  name: string
}
