import { ApiProperty } from '@nestjs/swagger'

export class CheckDriverLoadingAdrDto {
  id: string
  @ApiProperty()
  name: string
}
