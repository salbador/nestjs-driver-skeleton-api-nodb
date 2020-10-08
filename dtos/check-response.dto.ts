import { ApiProperty } from '@nestjs/swagger'

export class CheckResponseDto {
  id: string
  @ApiProperty()
  name: string
}
