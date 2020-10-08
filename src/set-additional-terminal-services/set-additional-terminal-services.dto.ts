import { ApiProperty } from '@nestjs/swagger'

export class SetAdditionalTerminalServicesDto {
  id: string
  @ApiProperty()
  name: string
}
