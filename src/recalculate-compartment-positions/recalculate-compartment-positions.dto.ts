import { ApiProperty } from '@nestjs/swagger'

export class RecalculateCompartmentPositionsDto {
  id: string
  @ApiProperty()
  name: string
}
