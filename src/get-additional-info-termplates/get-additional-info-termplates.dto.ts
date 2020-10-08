import { ApiProperty } from '@nestjs/swagger'

export class GetAdditionalInfoTermplatesDto {
  id: string
  @ApiProperty()
  name: string
}
