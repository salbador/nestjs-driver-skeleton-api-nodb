import { ApiProperty } from '@nestjs/swagger'

export class SetCheckinDto {
  id: string
  @ApiProperty()
  name: string
}
