import { ApiProperty } from '@nestjs/swagger'

export class CheckCompartmentPositionsDto {
  id: string
  @ApiProperty()
  name: string
}
