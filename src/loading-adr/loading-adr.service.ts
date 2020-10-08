
import { Injectable } from '@nestjs/common';
import { LoadingAdrDto } from './loading-adr.dto';
import { loadingAdrDto } from './loading-adr.data';

@Injectable()
export class LoadingAdrService {

    LoadingAdrConstruct: LoadingAdrDto[] = [
        { id: '1',...loadingAdrDto  },
        { id: '2', ...loadingAdrDto }
    ]

    loadingAdrService(loadingAdrDto: LoadingAdrDto): LoadingAdrDto {
        this.LoadingAdrConstruct.push(loadingAdrDto)
        return loadingAdrDto
    }
}


