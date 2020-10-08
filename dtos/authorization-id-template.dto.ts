import { ApiProperty } from '@nestjs/swagger'

export class AuthorizationIdTemplateDto {
  id: string
  @ApiProperty()
  name: string
}
