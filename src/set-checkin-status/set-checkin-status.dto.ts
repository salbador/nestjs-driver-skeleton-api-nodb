import { ApiProperty } from '@nestjs/swagger'

export class SetCheckinStatusDto {
  id: string
  @ApiProperty()
  name: string
}
