

import { CheckPreloadingsDto } from './check-preloadings.dto';
import { userDataDto } from '../../dtos/user-data.data';
import { driverDto } from '../../dtos/driver.data';
import { checkinDto } from '../../dtos/checkin.data';


export const checkPreloadingsDto: CheckPreloadingsDto =  {
  id: '0',
  location: "Hamburg",
  userData: userDataDto,
  checkin: checkinDto
}
