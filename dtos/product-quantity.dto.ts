import { ApiProperty } from '@nestjs/swagger'

export class ProductQuantityDto {
  id: string
  @ApiProperty()
  name: string
}
