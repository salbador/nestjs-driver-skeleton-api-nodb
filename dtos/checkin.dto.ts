import { ApiProperty, ApiOkResponse } from '@nestjs/swagger'
import { DriverDto } from './driver.dto';
import { VehicleDto } from './vehicle.dto';
import { ArrivalDateTimeSlotDto } from './arrival-date-time-slot.dto';
export type UserRoleType = "admin" | "editor" | "ghost";

export class CheckinDto {
  @ApiProperty({ nullable: true })
  id?: number
  @ApiProperty()
  terminalId: string
  @ApiProperty()
  arrivalDateTimeSlot: ArrivalDateTimeSlotDto
  @ApiProperty()
  driver: DriverDto
  @ApiProperty({
    type: "enum",
    enum: ["admin", "editor", "ghost"],
    default: "ghost"
  })
  roles: UserRoleType;
  @ApiProperty({name: '[VehicleDto]'})
  vehicles: [VehicleDto];
  // @ApiOkResponse(
  //   description: 'Cat object',
  //   type: VehicleDto,
  //   isArray: true // <= diff is here
  // )
  @ApiProperty({
    description: 'Cat object',
    type: VehicleDto,
    isArray: true // <= diff is here
  })
  vehicle2: [VehicleDto];
  // @ApiOkResponse(
  //   description: 'Cat object',
  //   type: [VehicleDto]
  // )
   @ApiProperty({
       description: 'Cat object',
       type: [VehicleDto]
  })
  vehicle3: [VehicleDto];

}
