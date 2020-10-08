import { ApiProperty } from '@nestjs/swagger'

export class GetAdditionalTerminalServicesDto {
  id: string
  @ApiProperty()
  name: string
}
