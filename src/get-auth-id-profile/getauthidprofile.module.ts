import { Module } from '@nestjs/common';
import { GetAuthIdProfileController } from './getauthidprofile.controller';
import { GetAuthIdProfileService } from './getauthidprofile.service';

@Module({
  controllers: [GetAuthIdProfileController],
  providers: [GetAuthIdProfileService]
})
export class GetAuthIdProfileModule {}
