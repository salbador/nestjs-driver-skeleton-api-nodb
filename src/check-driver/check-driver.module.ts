import { Module } from '@nestjs/common';
import { CheckDriverController } from './checkdriver.controller';
import { CheckDriverService } from './checkdriver.service';

@Module({
  controllers: [CheckDriverController],
  providers: [CheckDriverService]
})
export class CheckDriverModule {}
