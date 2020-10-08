import { ApiProperty } from '@nestjs/swagger'

export class NullableLocationDto {
  id: string
  @ApiProperty()
  name: string
}
