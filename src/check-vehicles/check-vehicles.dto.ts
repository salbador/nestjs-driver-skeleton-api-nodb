import { ApiProperty } from '@nestjs/swagger'

export class CheckVehiclesDto {
  id: string
  @ApiProperty()
  name: string
}
