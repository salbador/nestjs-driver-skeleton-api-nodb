import { ApiProperty } from '@nestjs/swagger'

export class LoadingAdrDto {
  id: string
  @ApiProperty()
  name: string
}
