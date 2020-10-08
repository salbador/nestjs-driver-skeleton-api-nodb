import { ApiProperty } from '@nestjs/swagger'

export class AuthorizationIdDto {
  id: string
  @ApiProperty()
  name: string
}
