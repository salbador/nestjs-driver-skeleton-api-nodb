import { ApiProperty } from '@nestjs/swagger'

export class GetWeightDto {
  id: string
  @ApiProperty()
  name: string
}
