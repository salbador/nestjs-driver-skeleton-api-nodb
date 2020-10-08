import { ApiProperty } from '@nestjs/swagger'

export class StatusDto {
  id: string
  @ApiProperty()
  name: string
}
