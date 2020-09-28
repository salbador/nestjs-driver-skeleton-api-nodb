import { Injectable } from '@nestjs/common';
import { driver, ITempletu, Person, userData, userIdData } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';
import { CheckDriverDTO } from 'saved/check-driver/checkdriver.controller';


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
export class GetWeightService {
    GetWeight: ITempletu[] = [
        { id: '1',...checkDriverDTO 
        },
        { id: '2', ...checkDriverDTO        }
    ]

    getGetWeight(): ITempletu[] {
        return this.GetWeight
    }

    getTempletu(id: string): ITempletu {
        const foundedTempletu = this.GetWeight.find(templetu => templetu.id === id)
        return foundedTempletu
    }

    createTempletu(templetuDTO: TempletuDTO): ITempletu {
        this.GetWeight.push(templetuDTO)
        return templetuDTO
    }

    editTempletu(id: string, templetuDTO: TempletuDTO): ITempletu {
        const foundedTempletu = this.getTempletu(id)
        foundedTempletu.location = templetuDTO.location ? templetuDTO.location : foundedTempletu.location
        return foundedTempletu
    }

    deleteTempletu(id: string) {
        this.GetWeight = this.GetWeight.filter(templetu => templetu.id !== id)
    }
}
