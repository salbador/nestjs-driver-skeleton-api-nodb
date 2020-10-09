import { CheckDriverDto } from './check-driver.dto';
import { userDataDto } from '../../dtos/user-data.data'
import { driverDto } from '../../dtos/driver.data'

export const checkDriverDto: CheckDriverDto =  {
  id: '0',
  location: "Hamburg",
  userData: userDataDto,
  driver: driverDto,
}

