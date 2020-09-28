import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetWeightModule } from './get-weight/get-weight.module';
import { InitiateWeigingModule } from './initiate-weiging/initiate-weiging.module';
import { CheckDriverModule } from './check-driver/check-driver.module';
import { CheckVehiclesModule } from './check-vehicles/check-vehicles.module';
import { CheckDriverLoadingAdrModule } from './check-driver-loading-adr/check-driver-loading-adr.module';
import { CheckVehicleLoadingAdrModule } from './check-vehicle-loading-adr/check-vehicle-loading-adr.module';
import { CheckTransportAvailabilityModule } from './check-transport-availability/check-transport-availability.module';
import { CheckAdditionalInformationModule } from './check-additional-information/check-additional-information.module';
import { CheckCompartmentPositionsModule } from './check-compartment-positions/check-compartment-positions.module';
import { CheckPreloadingsModule } from './check-preloadings/check-preloadings.module';
import { ConvertToUomModule } from './convert-to-uom/convert-to-uom.module';
import { GetTerminalShiftsModule } from './get-terminal-shifts/get-terminal-shifts.module';
import { GetVehicleInfoModule } from './get-vehicle-info/get-vehicle-info.module';
import { GetAuthIdProfileModule } from './get-auth-id-profile/get-auth-id-profile.module';
import { GetAuthPositionsModule } from './get-auth-positions/get-auth-positions.module';
import { GetAdditionalInfoTermplatesModule } from './get-additional-info-termplates/get-additional-info-termplates.module';
import { GetCheckinHeadersModule } from './get-checkin-headers/get-checkin-headers.module';
import { GetCheckinModule } from './get-checkin/get-checkin.module';
import { GetAdditionalTerminalServicesModule } from './get-additional-terminal-services/get-additional-terminal-services.module';
import { GetPrintableDocumentsModule } from './get-printable-documents/get-printable-documents.module';
import { CancelCheckinModule } from './cancel-checkin/cancel-checkin.module';
import { SetCheckinModule } from './set-checkin/set-checkin.module';
import { SetCheckinStatusModule } from './set-checkin-status/set-checkin-status.module';
import { SetAdditionalTerminalServicesModule } from './set-additional-terminal-services/set-additional-terminal-services.module';
import { PrintDocumentsModule } from './print-documents/print-documents.module';
import { RecalculateCompartmentPositionsModule } from './recalculate-compartment-positions/recalculate-compartment-positions.module';

@Module({
  imports: [
  GetWeightModule,
  InitiateWeigingModule,
  CheckDriverModule,
  CheckVehiclesModule,
  CheckDriverLoadingAdrModule,
  CheckVehicleLoadingAdrModule,
  CheckTransportAvailabilityModule,
  CheckAdditionalInformationModule,
  CheckCompartmentPositionsModule,
  CheckPreloadingsModule,
  ConvertToUomModule,
  GetTerminalShiftsModule,
  GetVehicleInfoModule,
  GetAuthIdProfileModule,
  GetAuthPositionsModule,
  GetAdditionalInfoTermplatesModule,
  GetCheckinHeadersModule,
  GetCheckinModule,
  GetAdditionalTerminalServicesModule,
  GetPrintableDocumentsModule,
  CancelCheckinModule,
  SetCheckinModule,
  SetCheckinStatusModule,
  SetAdditionalTerminalServicesModule,
  PrintDocumentsModule,
  RecalculateCompartmentPositionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


