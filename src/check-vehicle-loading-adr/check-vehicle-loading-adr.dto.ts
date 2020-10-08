import { ApiProperty } from '@nestjs/swagger'

export class CheckVehicleLoadingAdrDto {
  id: string
  @ApiProperty()
  name: string
}
