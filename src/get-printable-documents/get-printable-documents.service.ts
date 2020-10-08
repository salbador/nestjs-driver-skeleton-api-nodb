
import { Injectable } from '@nestjs/common';
import { GetPrintableDocumentsDto } from './get-printable-documents.dto';
import { getPrintableDocumentsDto } from './get-printable-documents.data';

@Injectable()
export class GetPrintableDocumentsService {

    GetPrintableDocumentsConstruct: GetPrintableDocumentsDto[] = [
        { id: '1',...getPrintableDocumentsDto  },
        { id: '2', ...getPrintableDocumentsDto }
    ]

    getPrintableDocumentsService(getPrintableDocumentsDto: GetPrintableDocumentsDto): GetPrintableDocumentsDto {
        this.GetPrintableDocumentsConstruct.push(getPrintableDocumentsDto)
        return getPrintableDocumentsDto
    }
}


