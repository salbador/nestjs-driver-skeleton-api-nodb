import {  Module } from '@nestjs/common';
import { GetAuthPositionsController } from './get-auth-positions.controller';
import { GetAuthPositionsService } from './get-auth-positions.service';

@Module({
  controllers: [GetAuthPositionsController],
  providers: [GetAuthPositionsService]
})
export class GetAuthPositionsModule {}

