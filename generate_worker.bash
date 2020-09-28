#!/usr/bin/env bash


echo '- - - - - GetWeight - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-weight/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-weight/
doe Templetus GetWeight
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-weight/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-weight/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - InitiateWeiging - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/initiate-weiging/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/initiate-weiging/
doe Templetus InitiateWeiging
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/initiate-weiging/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/initiate-weiging/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - CheckDriver - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-driver/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-driver/
doe Templetus CheckDriver
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-driver/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-driver/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - CheckVehicles - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-vehicles/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-vehicles/
doe Templetus CheckVehicles
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-vehicles/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-vehicles/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - CheckDriverLoadingAdr - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-driver-loading-adr/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-driver-loading-adr/
doe Templetus CheckDriverLoadingAdr
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-driver-loading-adr/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-driver-loading-adr/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - CheckVehicleLoadingAdr - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-vehicle-loading-adr/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-vehicle-loading-adr/
doe Templetus CheckVehicleLoadingAdr
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-vehicle-loading-adr/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-vehicle-loading-adr/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - CheckTransportAvailability - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-transport-availability/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-transport-availability/
doe Templetus CheckTransportAvailability
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-transport-availability/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-transport-availability/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - CheckAdditionalInformation - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-additional-information/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-additional-information/
doe Templetus CheckAdditionalInformation
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-additional-information/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-additional-information/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - CheckCompartmentPositions - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-compartment-positions/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-compartment-positions/
doe Templetus CheckCompartmentPositions
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-compartment-positions/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-compartment-positions/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - CheckPreloadings - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-preloadings/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-preloadings/
doe Templetus CheckPreloadings
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-preloadings/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/check-preloadings/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - ConvertToUom - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/convert-to-uom/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/convert-to-uom/
doe Templetus ConvertToUom
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/convert-to-uom/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/convert-to-uom/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - GetTerminalShifts - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-terminal-shifts/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-terminal-shifts/
doe Templetus GetTerminalShifts
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-terminal-shifts/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-terminal-shifts/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - GetVehicleInfo - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-vehicle-info/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-vehicle-info/
doe Templetus GetVehicleInfo
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-vehicle-info/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-vehicle-info/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - GetAuthIdProfile - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-auth-id-profile/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-auth-id-profile/
doe Templetus GetAuthIdProfile
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-auth-id-profile/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-auth-id-profile/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - GetAuthPositions - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-auth-positions/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-auth-positions/
doe Templetus GetAuthPositions
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-auth-positions/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-auth-positions/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - GetAdditionalInfoTermplates - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-additional-info-termplates/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-additional-info-termplates/
doe Templetus GetAdditionalInfoTermplates
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-additional-info-termplates/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-additional-info-termplates/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - GetCheckinHeaders - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-checkin-headers/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-checkin-headers/
doe Templetus GetCheckinHeaders
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-checkin-headers/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-checkin-headers/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - GetCheckin - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-checkin/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-checkin/
doe Templetus GetCheckin
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-checkin/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-checkin/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - GetAdditionalTerminalServices - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-additional-terminal-services/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-additional-terminal-services/
doe Templetus GetAdditionalTerminalServices
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-additional-terminal-services/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-additional-terminal-services/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - GetPrintableDocuments - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-printable-documents/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-printable-documents/
doe Templetus GetPrintableDocuments
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-printable-documents/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/get-printable-documents/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - CancelCheckin - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/cancel-checkin/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/cancel-checkin/
doe Templetus CancelCheckin
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/cancel-checkin/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/cancel-checkin/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - SetCheckin - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/set-checkin/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/set-checkin/
doe Templetus SetCheckin
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/set-checkin/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/set-checkin/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - SetCheckinStatus - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/set-checkin-status/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/set-checkin-status/
doe Templetus SetCheckinStatus
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/set-checkin-status/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/set-checkin-status/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - SetAdditionalTerminalServices - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/set-additional-terminal-services/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/set-additional-terminal-services/
doe Templetus SetAdditionalTerminalServices
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/set-additional-terminal-services/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/set-additional-terminal-services/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - PrintDocuments - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/print-documents/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/print-documents/
doe Templetus PrintDocuments
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/print-documents/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/print-documents/*.module.ts | head -1)
cp ${_from} ${_to}


echo '- - - - - RecalculateCompartmentPositions - - - - - ' 
cp -R /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/templetus/* /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/recalculate-compartment-positions/
cd /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/recalculate-compartment-positions/
doe Templetus RecalculateCompartmentPositions
_from=$(ls -ct1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/recalculate-compartment-positions/*.module.ts | head -1)
_to=$(ls -ctr1 /home/zeus/_/work/implico/learn/nestjs/nestjs-driver-skeleton-api-nodb/src/recalculate-compartment-positions/*.module.ts | head -1)
cp ${_from} ${_to}
