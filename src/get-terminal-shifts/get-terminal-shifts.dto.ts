import { ApiProperty } from '@nestjs/swagger'

export class GetTerminalShiftsDto {
  id: string
  @ApiProperty()
  name: string
}
