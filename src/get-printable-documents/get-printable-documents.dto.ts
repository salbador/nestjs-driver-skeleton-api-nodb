import { ApiProperty } from '@nestjs/swagger'

export class GetPrintableDocumentsDto {
  id: string
  @ApiProperty()
  name: string
}
