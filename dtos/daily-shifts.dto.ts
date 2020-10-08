import { ApiProperty } from '@nestjs/swagger'

export class DailyShiftsDto {
  id: string
  @ApiProperty()
  name: string
}
