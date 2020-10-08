import { ApiProperty } from '@nestjs/swagger'

export class GravimetricQuantityDto {
  id: string
  @ApiProperty()
  name: string
}
