import { ApiProperty } from '@nestjs/swagger'
import { UserDataDto } from './user-data.dto';
import { VehicleTypeEnumDto } from './vehicle-type-enum.dto';
import { ClientContextEnumDto } from './client-context-enum.dto';
import { userIdDataDto } from './user-id-data.data';

export class VehicleDto {
  id: string
  @ApiProperty({nullable: true})
  countryId: string
  @ApiProperty({nullable: true})
  referenceId: string
  @ApiProperty({type: 'integer', nullable: true, minimum: 1})
  position: number
  @ApiProperty({name: 'vehicleType', type: 'enum', enum: VehicleTypeEnumDto})
  vehicleType: string
}
