import { Module } from '@nestjs/common';
import { GetAuthPositionsController } from './getauthpositions.controller';
import { GetAuthPositionsService } from './getauthpositions.service';

@Module({
  controllers: [GetAuthPositionsController],
  providers: [GetAuthPositionsService]
})
export class GetAuthPositionsModule {}
