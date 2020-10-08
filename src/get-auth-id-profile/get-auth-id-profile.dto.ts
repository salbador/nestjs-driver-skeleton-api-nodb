import { ApiProperty } from '@nestjs/swagger'

export class GetAuthIdProfileDto {
  id: string
  @ApiProperty()
  name: string
}
