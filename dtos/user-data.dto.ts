import { ApiProperty } from '@nestjs/swagger'
import { CultureInfoEnumDto } from './culture-info-enum.dto'
import { ClientContextEnumDto } from './client-context-enum.dto'
import { UserIdDataDto } from './user-id-data.dto'

export class UserDataDto {
  @ApiProperty({ name: 'CultureInfo', enum: CultureInfoEnumDto })
  cultureInfo: string;
  @ApiProperty()
  companyId: string;
  @ApiProperty({ name: 'ClientContext', enum: ClientContextEnumDto })
  clientContext: string;
  @ApiProperty()
  userIdData: UserIdDataDto;
}
