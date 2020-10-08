import { ApiProperty } from '@nestjs/swagger'

export class GetVehicleInfoDto {
  id: string
  @ApiProperty()
  name: string
}
