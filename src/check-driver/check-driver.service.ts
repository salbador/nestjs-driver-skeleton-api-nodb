import {
  // HttpService,
  Injectable } from '@nestjs/common';
import { CheckDriverDto } from './check-driver.dto';
import { checkDriverDto } from './check-driver.data';

@Injectable()
export class CheckDriverService {
    // constructor(private http: HttpService) {}

    CheckDriverConstruct: CheckDriverDto[] = [
        { id: '1',...checkDriverDto  },
        { id: '2', ...checkDriverDto }
    ]

    // getUsers(){
    //   return this.http.post('http://localhost:3000/users')
    //     .pipe(
    //       map(res => res.data)
    //     )
    // }

    checkDriverService(checkDriverDto: CheckDriverDto): CheckDriverDto {
        this.CheckDriverConstruct.push(checkDriverDto)
        return checkDriverDto
    }
}
