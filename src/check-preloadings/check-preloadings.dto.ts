import { ApiProperty } from '@nestjs/swagger'

export class CheckPreloadingsDto {
  id: string
  @ApiProperty()
  name: string
}
