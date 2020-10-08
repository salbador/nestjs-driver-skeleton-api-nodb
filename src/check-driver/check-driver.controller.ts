import {
  // HttpService,
  Controller,
  // Get,
  Post, Body,
  // Param, Put, Delete
} from '@nestjs/common';
import { HttpClient } from '@angular/common/http';
// import { Http } from '@angular/http';
// import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { CheckDriverService } from './check-driver.service';
import { CheckDriverInterface } from './check-driver.interface';
import { CheckDriverDto } from './check-driver.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';

// import { ApiTags, ApiParam } from '@nestjs/swagger'
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';


// const http = Http
const httpClient = HttpClient
@Controller('checkDriver')
export class CheckDriverController {
    constructor(
      private service: CheckDriverService
    ) {}
    @Post()
    async post(@Body() userDto: UserDto): Promise<any>{
        const params = JSON.stringify(userDto);
        return await axios.post('http://localhost:3000/api/v2/user',
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then(res => {
                  console.log(res.data);
                  return res.data
              })
        }

    // @Post()
    // post():  Observable<AxiosResponse<UserInterface>> {
    //   return this.service.getUsers()
    // }
    // @Post()
    // checkDriverPost(@Body() userDto: UserDto):  Observable<UserInterface> {
    //     const params = JSON.stringify(userDto);
    //     return this.http.post('http://localhost:3000/user',
    //       params,
    //       {
    //           headers: {
    //               'Content-Type': 'application/json',
    //           },
    //       }).pipe(map((res: AxiosResponse<any>) => {
    //         console.log(res);
    //         return res.data
    //     }));
    // }
    // checkDriverPost(@Body() userDto: UserDto):  Observable<AxiosResponse<UserInterface>> {
    //     const params = JSON.stringify(userDto);
    //     return this.httpService.post('http://localhost:3000/user',
    //       params,
    //       {
    //           headers: {
    //               'Content-Type': 'application/json',
    //           },
    //       }).pipe(map((res: AxiosResponse<any>) => {
    //           console.log(res);
    //           return res.data
    //     }));
    // }
    @Post('/model')
    modelPost(@Body() checkDriverDto: CheckDriverDto):  CheckDriverInterface {
        return this.service.checkDriverService(checkDriverDto)
    }
}
