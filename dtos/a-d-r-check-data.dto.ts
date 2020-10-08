import { ApiProperty } from '@nestjs/swagger'

export class ADRCheckDataDto {
  id: string
  @ApiProperty()
  name: string
}
