import { ApiProperty } from '@nestjs/swagger'

export class AuthPositionDto {
  id: string
  @ApiProperty()
  name: string
}
