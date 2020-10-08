import { ApiProperty } from '@nestjs/swagger'

export class PrintableDocumentDto {
  id: string
  @ApiProperty()
  name: string
}
