import {  Module } from '@nestjs/common';
import { GetAuthIdProfileController } from './get-auth-id-profile.controller';
import { GetAuthIdProfileService } from './get-auth-id-profile.service';

@Module({
  controllers: [GetAuthIdProfileController],
  providers: [GetAuthIdProfileService]
})
export class GetAuthIdProfileModule {}

