import * as path from 'path';
import * as fs from 'fs';

import { HttpModule, Logger, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckDriverModule } from './check-driver/check-driver.module';
import { CancelCheckinModule } from './cancel-checkin/cancel-checkin.module';
import { CheckAdditionalInformationModule } from './check-additional-information/check-additional-information.module';
import { CheckCompartmentPositionsModule } from './check-compartment-positions/check-compartment-positions.module';
import { CheckPreloadingsModule } from './check-preloadings/check-preloadings.module';
import { CheckTransportAvailabilityModule } from './check-transport-availability/check-transport-availability.module';
import { CheckVehicleLoadingAdrModule } from './check-vehicle-loading-adr/check-vehicle-loading-adr.module';
import { CheckVehiclesModule } from './check-vehicles/check-vehicles.module';
import { ConvertToUomModule } from './convert-to-uom/convert-to-uom.module';
import { GetAdditionalInfoTermplatesModule } from './get-additional-info-termplates/get-additional-info-termplates.module';
import { GetAdditionalTerminalServicesModule } from './get-additional-terminal-services/get-additional-terminal-services.module';
import { GetAuthIdProfileModule } from './get-auth-id-profile/get-auth-id-profile.module';
import { GetAuthPositionsModule } from './get-auth-positions/get-auth-positions.module';
import { GetCheckinHeadersModule } from './get-checkin-headers/get-checkin-headers.module';
import { GetCheckinModule } from './get-checkin/get-checkin.module';
import { GetPrintableDocumentsModule } from './get-printable-documents/get-printable-documents.module';
import { GetTerminalShiftsModule } from './get-terminal-shifts/get-terminal-shifts.module';
import { GetVehicleInfoModule } from './get-vehicle-info/get-vehicle-info.module';
import { GetWeightModule } from './get-weight/get-weight.module';
import { InitiateWeigingModule } from './initiate-weiging/initiate-weiging.module';
import { CheckDriverLoadingAdrModule } from './check-driver-loading-adr/check-driver-loading-adr.module';
import { PrintDocumentsModule } from './print-documents/print-documents.module';
import { RecalculateCompartmentPositionsModule } from './recalculate-compartment-positions/recalculate-compartment-positions.module';
import { SetAdditionalTerminalServicesModule } from './set-additional-terminal-services/set-additional-terminal-services.module';
import { SetCheckinModule } from './set-checkin/set-checkin.module';
import { SetCheckinStatusModule } from './set-checkin-status/set-checkin-status.module';
import { UserModule } from './user/user.module';
import {configuration} from '../config/configuration';

const config = configuration();


@Module({
  imports: [
    HttpModule,
    CheckDriverModule,
    UserModule,
    CancelCheckinModule,
    CheckAdditionalInformationModule,
    CheckCompartmentPositionsModule,
    CheckPreloadingsModule,
    CheckTransportAvailabilityModule,
    CheckVehicleLoadingAdrModule,
    CheckVehiclesModule,
    ConvertToUomModule,
    GetAdditionalInfoTermplatesModule,
    GetAdditionalTerminalServicesModule,
    GetAuthIdProfileModule,
    GetAuthPositionsModule,
    GetCheckinHeadersModule,
    GetCheckinModule,
    GetPrintableDocumentsModule,
    GetTerminalShiftsModule,
    GetVehicleInfoModule,
    GetWeightModule,
    InitiateWeigingModule,
    CheckDriverLoadingAdrModule,
    PrintDocumentsModule,
    RecalculateCompartmentPositionsModule,
    SetAdditionalTerminalServicesModule,
    SetCheckinModule,
    SetCheckinStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  private logger: Logger;

  constructor() {
    this.logger = new Logger('AppModule');

    const dotenv = path.resolve(__dirname, '..', '.env');
    if (fs.existsSync(dotenv)) {
      this.logger.log(`Found .env at ${dotenv}`);
    } else {
      this.logger.warn(`WARNING: Cannot find .env at ${dotenv}`);
    }
  }
}


