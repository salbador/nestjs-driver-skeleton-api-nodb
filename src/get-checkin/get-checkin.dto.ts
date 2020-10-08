import { ApiProperty } from '@nestjs/swagger'

export class GetCheckinDto {
  id: string
  @ApiProperty()
  name: string
}
