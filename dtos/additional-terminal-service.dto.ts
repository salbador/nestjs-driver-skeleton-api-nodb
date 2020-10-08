import { ApiProperty } from '@nestjs/swagger'

export class AdditionalTerminalServiceDto {
  id: string
  @ApiProperty()
  name: string
}
