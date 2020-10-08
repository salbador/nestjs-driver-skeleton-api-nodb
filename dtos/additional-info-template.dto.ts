import { ApiProperty } from '@nestjs/swagger'

export class AdditionalInfoTemplateDto {
  id: string
  @ApiProperty()
  name: string
}
