import {  Module } from '@nestjs/common';
import { ConvertToUomController } from './convert-to-uom.controller';
import { ConvertToUomService } from './convert-to-uom.service';

@Module({
  controllers: [ConvertToUomController],
  providers: [ConvertToUomService]
})
export class ConvertToUomModule {}

