import {  Module } from '@nestjs/common';
import { GetPrintableDocumentsController } from './get-printable-documents.controller';
import { GetPrintableDocumentsService } from './get-printable-documents.service';

@Module({
  controllers: [GetPrintableDocumentsController],
  providers: [GetPrintableDocumentsService]
})
export class GetPrintableDocumentsModule {}

