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
  @ApiProperty({name: 'vehicleType', type: 'enum', enum: VehicleTypeEnumDto, description: "  RDTU = 'Truck',\n" +
      "  PERSON = 'Person for the means of transport human being',\n" +
      "  RC = 'Chassis of a railcar',\n" +
      "  RDBT = 'Bobtail / Short Tailed Tank Truck',\n" +
      "  RDC = 'Chassis of a truck',\n" +
      "  RDCO = 'Container',\n" +
      "  RDCS = 'Tank Container Semitrailer',\n" +
      "  RDCT = 'Tank Container Trailer',\n" +
      "  RDDT = 'TKW -2 Achsen Hänger (tank truck -dog trailer)',\n" +
      "  RDE = 'Engine of a truck',\n" +
      "  RDHT = 'Heavy Trailer',\n" +
      "  RDL = 'Loading area (for bulk goods or general cargo)',\n" +
      "  RDMC = 'Motor Car',\n" +
      "  RDMT = 'Motor Tractor',\n" +
      "  RDMV = 'Motor Vehicle',\n" +
      "  RDRT = 'TKW Auflieger für weiteren Auflieger (tank truck- b-double front trailer)',\n" +
      "  RDST = 'Semitrailer',\n" +
      "  RDT = 'Tank of a truck',\n" +
      "  RDTC = 'Tank Container Truck',\n" +
      "  RDTP = 'Fixed Truck/Trailer Combi-nation',\n" +
      "  RDTR = 'Trailer',\n" +
      "  RGRP = 'Railcar Group',\n" +
      "  ROUTE = 'Route',\n" +
      "  RT = 'Tank of a railcar',\n" +
      "  RTRAIN = 'Train',\n" +
      "  RTW = 'Railcar',\n" +
      "  WB = 'Body of a ship',\n" +
      "  WE = 'Engine of a ship',\n" +
      "  WL = 'Loading area (for bulk goods or general cargo)',\n" +
      "  WMT = 'Ship',\n" +
      "  WT = 'Tank of a ship',\n" +
      "  WTSM = 'Barge (inland navigation vessel)',\n" +
      "  WV = 'Vessel (not self-driven, e.g. a barge)',\n" +
      "  WVE = 'Vessel / Ship',"})
  vehicleType: string
  // @ApiProperty({name: 'maxLoadingWeight', type: 'enum', enum: VehicleTypeEnumDto})
  // maxLoadingWeight: string
}
