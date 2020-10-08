import { ApiProperty } from '@nestjs/swagger'

export class CheckAdditionalInformationDto {
  id: string
  @ApiProperty()
  name: string
}
