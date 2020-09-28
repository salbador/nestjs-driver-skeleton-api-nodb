import { Module } from '@nestjs/common';
import { PrintDocumentsController } from './printdocuments.controller';
import { PrintDocumentsService } from './printdocuments.service';

@Module({
  controllers: [PrintDocumentsController],
  providers: [PrintDocumentsService]
})
export class PrintDocumentsModule {}
