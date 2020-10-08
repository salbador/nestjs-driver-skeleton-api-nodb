import { Module } from '@nestjs/common';
import { CheckDriverController } from './check-driver.controller';
import { CheckDriverService } from './check-driver.service';

@Module({
  controllers: [CheckDriverController],
  providers: [CheckDriverService]
})
export class CheckDriverModule {}
