import { ApiProperty } from '@nestjs/swagger'

export class ConvertToUomDto {
  id: string
  @ApiProperty()
  name: string
}
