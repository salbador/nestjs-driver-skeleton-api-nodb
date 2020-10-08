import { ApiProperty } from '@nestjs/swagger'

export class TransportPositionDto {
  id: string
  @ApiProperty()
  name: string
}
