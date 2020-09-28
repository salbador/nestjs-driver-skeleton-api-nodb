import { Module } from '@nestjs/common';
import { GetPrintableDocumentsController } from './getprintabledocuments.controller';
import { GetPrintableDocumentsService } from './getprintabledocuments.service';

@Module({
  controllers: [GetPrintableDocumentsController],
  providers: [GetPrintableDocumentsService]
})
export class GetPrintableDocumentsModule {}
