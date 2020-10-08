
import { Injectable } from '@nestjs/common';
import { ConvertToUomDto } from './convert-to-uom.dto';
import { convertToUomDto } from './convert-to-uom.data';

@Injectable()
export class ConvertToUomService {

    ConvertToUomConstruct: ConvertToUomDto[] = [
        { id: '1',...convertToUomDto  },
        { id: '2', ...convertToUomDto }
    ]

    convertToUomService(convertToUomDto: ConvertToUomDto): ConvertToUomDto {
        this.ConvertToUomConstruct.push(convertToUomDto)
        return convertToUomDto
    }
}


