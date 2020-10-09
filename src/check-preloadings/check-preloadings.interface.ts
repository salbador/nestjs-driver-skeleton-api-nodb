import { UserDataDto } from '../../dtos/user-data.dto';
import { CheckinDto } from '../../dtos/checkin.dto';

export interface CheckPreloadingsInterface {
  id?: string
  location: string
  userData: UserDataDto
  checkin: CheckinDto
}

