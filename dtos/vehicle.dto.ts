import { ApiProperty } from '@nestjs/swagger'

export class VehicleDto {
  id: string
  @ApiProperty()
  name: string
}
