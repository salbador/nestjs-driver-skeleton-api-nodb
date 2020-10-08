
import { Injectable } from '@nestjs/common';
import { PrintDocumentsDto } from './print-documents.dto';
import { printDocumentsDto } from './print-documents.data';

@Injectable()
export class PrintDocumentsService {

    PrintDocumentsConstruct: PrintDocumentsDto[] = [
        { id: '1',...printDocumentsDto  },
        { id: '2', ...printDocumentsDto }
    ]

    printDocumentsService(printDocumentsDto: PrintDocumentsDto): PrintDocumentsDto {
        this.PrintDocumentsConstruct.push(printDocumentsDto)
        return printDocumentsDto
    }
}


