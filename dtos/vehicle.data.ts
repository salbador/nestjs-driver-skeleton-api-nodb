import { VehicleDto } from './vehicle.dto';
import { VehicleTypeEnumDto } from './vehicle-type-enum.dto';
import { ApiProperty } from '@nestjs/swagger';
export const vehicleDto: VehicleDto = {
  id: '0',
  countryId: 'Germany',
  referenceId: '123123',
  position: 1,
  vehicleType: VehicleTypeEnumDto['TOCI']
}
