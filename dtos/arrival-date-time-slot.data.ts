import { ArrivalDateTimeSlotDto } from './arrival-date-time-slot.dto';
import { ApiProperty } from '@nestjs/swagger';
export const arrivalDateTimeSlotDto: ArrivalDateTimeSlotDto =  {
  id: '0',
  min: new Date().toLocaleString(),
  max: new Date().toLocaleString(),
  preferred: true
}

