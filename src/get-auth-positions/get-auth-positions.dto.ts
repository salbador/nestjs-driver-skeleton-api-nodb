import { ApiProperty } from '@nestjs/swagger'

export class GetAuthPositionsDto {
  id: string
  @ApiProperty()
  name: string
}
