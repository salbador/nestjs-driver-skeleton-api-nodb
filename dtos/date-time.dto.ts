import { ApiProperty } from '@nestjs/swagger'

export class DateTimeDto {
  id: string
  @ApiProperty()
  name: string
}
