import { CheckinDto } from './checkin.dto';
import { ApiProperty } from '@nestjs/swagger';
import { arrivalDateTimeSlotDto } from './arrival-date-time-slot.data';
import { driverDto } from './driver.data';
import { vehicleDto } from './vehicle.data';

export type UserRoleType = "admin" | "editor" | "ghost";
export const checkinDto: CheckinDto =  {
  id: 12123,
  terminalId: 'TERMI',
  arrivalDateTimeSlot: arrivalDateTimeSlotDto,
  driver: driverDto,
  roles: "admin",
  vehicles: [vehicleDto],
  vehicle2: [vehicleDto],
  vehicle3: [vehicleDto],
}

