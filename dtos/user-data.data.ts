import { UserDataDto } from './user-data.dto';
import { CultureInfoEnumDto } from './culture-info-enum.dto';
import { ClientContextEnumDto } from './client-context-enum.dto';
import { userIdDataDto } from './user-id-data.data';
export const userDataDto: UserDataDto = {
  cultureInfo: CultureInfoEnumDto['de'],
  companyId: "022101",
  clientContext: ClientContextEnumDto['TOCI'],
  userIdData: userIdDataDto
}
