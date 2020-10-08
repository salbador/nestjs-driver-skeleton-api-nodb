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

let culture_info_interface: CultureInfoENUMInterface = {
  de: 'de'
}
let client_context_interface: ClientContextENUMInterface = {
  TOCI:'TOCI'
}
let person_interface: PersonInterface = {
  lastName: "Alfonso",
  firstName: "Thomas", 
  dateOfBirth: new Date(), 
  nickname: "thom", 
  driverPin: "QWER123" 
}
let user_id_data_interface: UserIdDataInterface = {...person_interface}

let user_data_interface: UserDataInterface = {
  cultureInfo: CultureInfoENUMDTO['de'], 
  companyId: "022101", 
  clientContext:  ClientContextENUMDTO['TOCI'],
  userIdData: user_id_data_interface 
}
let driver_interface: DriverInterface = {...person_interface}
let check_driver_interface: CheckDriverInterface =  {
  id: '0',
  location: "Hamburg",
  userData: user_data_interface, 
  driver: driver_interface, 
}
// let culture_info_dto: CultureInfoENUMDTO = {
//   de: 'de'
// }
// let client_context_dto: ClientContextENUMDTO = {
//   TOCI:'TOCI'
// }
let person_dto: PersonDTO = {
  lastName: "Alfonso",
  firstName: "Thomas", 
  dateOfBirth: new Date(), 
  nickname: "thom", 
  driverPin: "QWER123" 
}
let user_id_data_dto: UserIdDataDTO = {...person_dto}

let user_data_dto: UserDataDTO = {
  cultureInfo: CultureInfoENUMDTO['de'], 
  companyId: "022101", 
  clientContext: ClientContextENUMDTO['TOCI'],
  userIdData: user_id_data_dto 
}
let driver_dto: DriverDTO = {...person_dto}
let check_driver_dto: CheckDriverDTO =  {
  id: '0',
  location: "Hamburg",
  userData: user_data_dto, 
  driver: driver_dto, 
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
        { id: '1',...check_driver_dto 
        },
        { id: '2', ...check_driver_dto        }
    ]

    // checkDriverService(checkDriverDTO: CheckDriverDTO): CheckDriverDTO {
    //     this.CheckDriverConstruct.push(checkDriverDTO)
    //     return check_driver_dto
    // }
    checkDriverService(checkDriverDTO: CheckDriverDTO): any {
      // this.CheckDriverConstruct.push(checkDriverDTO)
      var obj = new MyClass();
      const test = obj.showFile();
      return test
    }
}
