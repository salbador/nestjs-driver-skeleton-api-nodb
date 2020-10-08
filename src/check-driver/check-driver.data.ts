import {
  CheckDriverInterface,
  CultureInfoEnumInterface,
  ClientContextEnumInterface,
  PersonInterface,
  UserDataInterface,
} from './check-driver.interface';
import { CheckDriverDto } from './check-driver.dto';

import { CultureInfoEnumDto } from '../../dtos/culture-info-enum.dto'
import { ClientContextEnumDto } from '../../dtos/client-context-enum.dto'
import { UserIdDataDto } from '../../dtos/user-id-data.dto'
import { UserDataDto } from '../../dtos/user-data.dto'
import { DriverDto } from '../../dtos/driver.dto'
import { PersonDto } from '../../dtos/person.dto'

const personInterface: PersonInterface = {
  lastName: "Alfonso",
  firstName: "Thomas",
  dateOfBirth: new Date(),
  nickname: "thom",
  driverPin: "QWER123"
}
const userDataInterface: UserDataInterface = {
  cultureInfo: CultureInfoEnumDto['de'],
  companyId: "022101",
  clientContext:  ClientContextEnumDto['TOCI'],
  userIdData: personInterface
}
const checkDriverInterface: CheckDriverInterface =  {
  id: '0',
  location: "Hamburg",
  userData: userDataInterface,
  driver: personInterface,
}
const personDto: PersonDto = {
  lastName: "Alfonso",
  firstName: "Thomas",
  dateOfBirth: new Date(),
  nickname: "thom",
  driverPin: "QWER123"
}
const userIdDataDto: UserIdDataDto = {...personDto}

const userDataDto: UserDataDto = {
  cultureInfo: CultureInfoEnumDto['de'],
  companyId: "022101",
  clientContext: ClientContextEnumDto['TOCI'],
  userIdData: userIdDataDto
}
const driverDto: DriverDto = {...personDto}
export const checkDriverDto: CheckDriverDto =  {
  id: '0',
  location: "Hamburg",
  userData: userDataDto,
  driver: driverDto,
}
