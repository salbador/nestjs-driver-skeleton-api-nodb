import {
  // HttpModule, HttpService,
  Module } from '@nestjs/common';
import { CheckDriverController } from './check-driver.controller';
import { CheckDriverService } from './check-driver.service';
// import { UserModule, UserService } from '../user/user.module';
// import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
//
// import { HttpClient } from '@angular/common/http';

@Module({
  controllers: [CheckDriverController],
  providers: [CheckDriverService]
})
export class CheckDriverModule {}
