import { ApiProperty } from '@nestjs/swagger'

export class InitiateWeigingDto {
  id: string
  @ApiProperty()
  name: string
}
