import { Module } from '@nestjs/common';
import { TempletusController } from './templetus.controller';
import { TempletusService } from './templetus.service';

@Module({
  controllers: [TempletusController],
  providers: [TempletusService]
})
export class TempletusModule {}
