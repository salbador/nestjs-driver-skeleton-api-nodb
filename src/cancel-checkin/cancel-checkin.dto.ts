import { ApiProperty } from '@nestjs/swagger'

export class CancelCheckinDto {
  id: string
  @ApiProperty()
  name: string
}
