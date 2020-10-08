import { ApiProperty } from '@nestjs/swagger'

export class WeeklyShiftsDto {
  id: string
  @ApiProperty()
  name: string
}
