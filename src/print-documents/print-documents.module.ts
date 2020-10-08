import {  Module } from '@nestjs/common';
import { PrintDocumentsController } from './print-documents.controller';
import { PrintDocumentsService } from './print-documents.service';

@Module({
  controllers: [PrintDocumentsController],
  providers: [PrintDocumentsService]
})
export class PrintDocumentsModule {}

