import { Injectable } from '@nestjs/common';
import { ICheckDriverDTO } from './templetu.interface';
import { CheckDriverDTO,driver,userData,userIdData, Person   } from './dto/templetu.dto';

let person: Person = {
    lastName: "Alfonso",
    firstName: "Thomas", 
    dateOfBirth: new Date(), 
    nickname: "thom", 
    driverPin: "QWER123" 
  }
let user_id_data: userIdData = {...person}

let user_data: userData = {
    cultureInfo: "ARG", 
    companyId: "022101", 
    clientContext: "213409",
    userIdData: user_id_data 
}
let driver_data: driver = {...person}
let checkDriverDTO: CheckDriverDTO =  {
    location: "Hamburg",
    userData: user_data, 
    driver: driver_data, 
  }
@Injectable()
export class CheckDriverService {
    CheckDriver: ICheckDriverDTO[] = [
        {...checkDriverDTO },
        {...checkDriverDTO }
    ]

    createTempletu(checkDriverDTO: CheckDriverDTO): ICheckDriverDTO {
        this.CheckDriver.push(checkDriverDTO)
        return checkDriverDTO
    }

}
