import { ApiProperty } from '@nestjs/swagger'

export class VehicleInfoDto {
  id: string
  @ApiProperty()
  name: string
}
