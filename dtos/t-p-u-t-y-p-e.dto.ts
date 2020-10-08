import { ApiProperty } from '@nestjs/swagger'

export class TPUTYPEDto {
  id: string
  @ApiProperty()
  name: string
}
