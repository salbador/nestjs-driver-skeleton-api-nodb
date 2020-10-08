import { ApiProperty } from '@nestjs/swagger'

export class QuantityDto {
  id: string
  @ApiProperty()
  name: string
}
