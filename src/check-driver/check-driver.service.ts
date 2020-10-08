import { map } from 'rxjs/operators';
import { HttpService, Injectable } from '@nestjs/common';
import {
  DriverInterface,
  CheckDriverInterface,
  CultureInfoENUMInterface,
  ClientContextENUMInterface,
  PersonInterface,
  UserDataInterface,
  UserIdDataInterface
} from './check-driver.interface';
import {   DriverDto,
  CheckDriverDto,
  CultureInfoENUMDto,
  ClientContextENUMDto,
  PersonDto,
  UserDataDto,
  UserIdDataDto } from './check-driver.dto';

const cultureInfoInterface: CultureInfoENUMInterface = {
  de: 'de'
}
const clientContextInterface: ClientContextENUMInterface = {
  TOCI:'TOCI'
}
const personInterface: PersonInterface = {
  lastName: "Alfonso",
  firstName: "Thomas",
  dateOfBirth: new Date(),
  nickname: "thom",
  driverPin: "QWER123"
}
const userIdDataInterface: UserIdDataInterface = {...personInterface}

const userDataInterface: UserDataInterface = {
  cultureInfo: CultureInfoENUMDto['de'],
  companyId: "022101",
  clientContext:  ClientContextENUMDto['TOCI'],
  userIdData: userIdDataInterface
}
const driverInterface: DriverInterface = {...personInterface}
const checkDriverInterface: CheckDriverInterface =  {
  id: '0',
  location: "Hamburg",
  userData: userDataInterface,
  driver: driverInterface,
}
// let culture_info_dto: CultureInfoENUMDto = {
//   de: 'de'
// }
// let client_context_dto: ClientContextENUMDto = {
//   TOCI:'TOCI'
// }
const personDto: PersonDto = {
  lastName: "Alfonso",
  firstName: "Thomas",
  dateOfBirth: new Date(),
  nickname: "thom",
  driverPin: "QWER123"
}
const userIdDataDto: UserIdDataDto = {...personDto}

const userDataDto: UserDataDto = {
  cultureInfo: CultureInfoENUMDto['de'],
  companyId: "022101",
  clientContext: ClientContextENUMDto['TOCI'],
  userIdData: userIdDataDto
}
const driverDto: DriverDto = {...personDto}
const checkDriverDto: CheckDriverDto =  {
  id: '0',
  location: "Hamburg",
  userData: userDataDto,
  driver: driverDto,
}
class MyClass {

  // Here we import the File System module of node
  private fs = require('fs');

  constructor() { }

  createFile() {

      this.fs.writeFile('file.txt', 'I am cool!',  function(err) {
          if (err) {
              return console.error(err);
          }
          console.log("File created!");
      });
  }

  showFile() {

      this.fs.readFile('test.json', 'utf-8', function (err, data) {
          if (err) {
              console.error(err);
              return err
          }
          console.log("Asynchronous read: " + data.toString());
          return data.toString();
      });
  }
}

// Usage
// var obj = new MyClass();
// // obj.createFile();
// const test = obj.showFile();

// import json from './test.json';
// console.log(json, 'the json obj');

// import { readFileSync } from 'fs';
// const test = readFileSync('./testjson', 'utf-8');

@Injectable()
export class CheckDriverService {
    // constructor(private http: HttpService) {}

    CheckDriverConstruct: CheckDriverDto[] = [
        { id: '1',...checkDriverDto
        },
        { id: '2', ...checkDriverDto        }
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
    // checkDriverService(checkDriverDto: CheckDriverDto): any {
    //   // this.CheckDriverConstruct.push(checkDriverDto)
    //   var obj = new MyClass();
    //   const test = obj.showFile();
    //   return test
    // }
}
