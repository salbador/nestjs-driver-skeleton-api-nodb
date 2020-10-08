import { ApiProperty } from '@nestjs/swagger'

export class CheckinHeaderDto {
  id: string
  @ApiProperty()
  name: string
}
