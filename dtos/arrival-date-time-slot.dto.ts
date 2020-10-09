import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger'

export class ArrivalDateTimeSlotDto {
  id: string
  @ApiProperty()
  min: string
  @ApiProperty()
  max: string
  @ApiProperty()
  preferred: boolean
}
