import { ApiProperty } from '@nestjs/swagger'

export class PrintDocumentsDto {
  id: string
  @ApiProperty()
  name: string
}
