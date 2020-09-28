import { Module } from '@nestjs/common';
import { ConvertToUomController } from './converttouom.controller';
import { ConvertToUomService } from './converttouom.service';

@Module({
  controllers: [ConvertToUomController],
  providers: [ConvertToUomService]
})
export class ConvertToUomModule {}
