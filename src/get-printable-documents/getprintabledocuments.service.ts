import { Injectable } from '@nestjs/common';
import { ITempletu } from './templetu.interface';
import { TempletuDTO } from './dto/templetu.dto';

@Injectable()
export class GetPrintableDocumentsService {
    GetPrintableDocuments: ITempletu[] = [
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

    getGetPrintableDocuments(): ITempletu[] {
        return this.GetPrintableDocuments
    }

    getTempletu(id: string): ITempletu {
        const foundedTempletu = this.GetPrintableDocuments.find(templetu => templetu.id === id)
        return foundedTempletu
    }

    createTempletu(templetuDTO: TempletuDTO): ITempletu {
        this.GetPrintableDocuments.push(templetuDTO)
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
        this.GetPrintableDocuments = this.GetPrintableDocuments.filter(templetu => templetu.id !== id)
    }
}
