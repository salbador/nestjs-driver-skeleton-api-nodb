import { Injectable } from '@nestjs/common';
import {
  DriverInterface,
  CheckDriverInterface,
  CultureInfoENUMInterface,
  ClientContextENUMInterface,
  PersonInterface,
  UserDataInterface,
  UserIdDataInterface
} from './check-driver.interface';
import {   DriverDTO,
  CheckDriverDTO,
  CultureInfoENUMDTO,
  ClientContextENUMDTO,
  PersonDTO,
  UserDataDTO,
  UserIdDataDTO } from './check-driver.dto';

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
  cultureInfo: CultureInfoENUMDTO['de'],
  companyId: "022101",
  clientContext:  ClientContextENUMDTO['TOCI'],
  userIdData: userIdDataInterface
}
const driverInterface: DriverInterface = {...personInterface}
const checkDriverInterface: CheckDriverInterface =  {
  id: '0',
  location: "Hamburg",
  userData: userDataInterface,
  driver: driverInterface,
}
// let culture_info_dto: CultureInfoENUMDTO = {
//   de: 'de'
// }
// let client_context_dto: ClientContextENUMDTO = {
//   TOCI:'TOCI'
// }
const personDto: PersonDTO = {
  lastName: "Alfonso",
  firstName: "Thomas",
  dateOfBirth: new Date(),
  nickname: "thom",
  driverPin: "QWER123"
}
const userIdDataDto: UserIdDataDTO = {...personDto}

const userDataDto: UserDataDTO = {
  cultureInfo: CultureInfoENUMDTO['de'],
  companyId: "022101",
  clientContext: ClientContextENUMDTO['TOCI'],
  userIdData: userIdDataDto
}
const driverDto: DriverDTO = {...personDto}
const checkDriverDto: CheckDriverDTO =  {
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
    CheckDriverConstruct: CheckDriverDTO[] = [
        { id: '1',...checkDriverDto
        },
        { id: '2', ...checkDriverDto        }
    ]

    checkDriverService(checkDriverDTO: CheckDriverDTO): CheckDriverDTO {
        this.CheckDriverConstruct.push(checkDriverDTO)
        return checkDriverDto
    }
    // checkDriverService(checkDriverDTO: CheckDriverDTO): any {
    //   // this.CheckDriverConstruct.push(checkDriverDTO)
    //   var obj = new MyClass();
    //   const test = obj.showFile();
    //   return test
    // }
}
