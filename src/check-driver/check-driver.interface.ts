import { CultureInfoEnumDto } from '../../dtos/culture-info-enum.dto'
import { ClientContextEnumDto } from '../../dtos/client-context-enum.dto'

export type CultureInfoEnumInterface = {
    [key in CultureInfoEnumDto]?: string
}
export type ClientContextEnumInterface = {
    [key in ClientContextEnumDto]?: string
}

export interface PersonInterface {
    lastName: string
    firstName: string
    dateOfBirth: Date
    nickname: string
    driverPin: string
}

export interface UserDataInterface {
  cultureInfo: string
  companyId: string
  clientContext: string
  userIdData: PersonInterface
}

export interface CheckDriverInterface {
  id?: string
  location: string
  userData: UserDataInterface
  driver: PersonInterface
}
