import { Injectable } from '@nestjs/common';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';

@Injectable()
export class GetCheckinHeadersService {
    GetCheckinHeaders: ITempletu[] = [
        { id: '1', 
        lastName: "John",
        firstName: "Doe", 
        dateOfBirth: new Date(), 
        nickname: "John Doe", 
        driverPin: "12093"
        },
        { id: '2', 
        lastName: "Jane",
        firstName: "Doe", 
        dateOfBirth: new Date(), 
        nickname: "Jane Doe",
        driverPin: "09182" 
        }
    ]

    getGetCheckinHeaders(): ITempletu[] {
        return this.GetCheckinHeaders
    }

    getTempletu(id: string): ITempletu {
        const foundedTempletu = this.GetCheckinHeaders.find(templetu => templetu.id === id)
        return foundedTempletu
    }

    createTempletu(templetuDTO: TempletuDTO): ITempletu {
        this.GetCheckinHeaders.push(templetuDTO)
        return templetuDTO
    }

    editTempletu(id: string, templetuDTO: TempletuDTO): ITempletu {
        const foundedTempletu = this.getTempletu(id)
        foundedTempletu.lastName = templetuDTO.lastName ? templetuDTO.lastName : foundedTempletu.lastName
        foundedTempletu.firstName = templetuDTO.firstName ? templetuDTO.firstName : foundedTempletu.firstName
        foundedTempletu.dateOfBirth = templetuDTO.dateOfBirth ? templetuDTO.dateOfBirth : foundedTempletu.dateOfBirth
        foundedTempletu.firstName = templetuDTO.nickname ? templetuDTO.nickname : foundedTempletu.nickname
        foundedTempletu.driverPin = templetuDTO.driverPin ? templetuDTO.driverPin : foundedTempletu.driverPin
        return foundedTempletu
    }

    deleteTempletu(id: string) {
        this.GetCheckinHeaders = this.GetCheckinHeaders.filter(templetu => templetu.id !== id)
    }
}