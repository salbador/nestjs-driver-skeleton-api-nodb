import { ApiProperty } from '@nestjs/swagger'

export class VehicleInfoHeaderDto {
  id: string
  @ApiProperty()
  name: string
}
