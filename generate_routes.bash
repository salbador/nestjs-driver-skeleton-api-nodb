#!/usr/bin/env bash
#!/bin/bash
#
DEBUG_VERB_READING_LOGIC=$DEBUG || 0
LIGHTPINK="\033[1;204m"
YELLOW_OVER_DARKBLUE="\033[38;5;220m\033[48;5;20m"
RESET="\033[0m"
        function kill() {
            echo -e " ☠ ${LIGHTPINK} KILL EXECUTION SIGNAL SEND ${RESET}"
            echo -e " ☠ ${YELLOW_OVER_DARKBLUE}  ${*} ${RESET}"
            exit 69;
        }

function generate_routes(){
    local _routes 

local appmodule="import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

"
# echo "${appmodule}"
# exit 0
    _routes="
GetWeight
InitiateWeiging
CheckDriver
CheckVehicles
CheckDriverLoadingAdr
CheckVehicleLoadingAdr
CheckTransportAvailability
CheckAdditionalInformation
CheckCompartmentPositions
CheckPreloadings
ConvertToUom
GetTerminalShifts
GetVehicleInfo
GetAuthIdProfile
GetAuthPositions
GetAdditionalInfoTermplates
GetCheckinHeaders
GetCheckin
GetAdditionalTerminalServices
GetPrintableDocuments
CancelCheckin
SetCheckin
SetCheckinStatus
SetAdditionalTerminalServices
PrintDocuments
RecalculateCompartmentPositions
"
    local _one _camel _pwd _from _to _run  _msg _template _target _worker 
    local -i _err
    _pwd=$(pwd)
    _worker="${_pwd}/generate_worker.bash"
    _template="${_pwd}/src/templetus"
    echo "#!/usr/bin/env bash" > "${_worker}" 
    echo "${appmodule}" > "${_pwd}/src/app.module.ts"
    chmod +x "${_worker}"
    while read -r _one; do
    {
      echo "Testing ${_one}"
      if [ -n "${_one}" ] ; then    # if not empty
      {
        # Test  
        # echo "check-checkpreloadings-loading-a-d-r" | sed --expression 's/\([A-Z]\)/-\L\1/g' --expression 's/^-//' | sed 's/-a-d-r/-adr/'
        # echo "CheckcheckPreloadingsLoadingADR" | sed --expression 's/\([A-Z]\)/-\L\1/g' --expression 's/^-//' | sed 's/-a-d-r/-adr/'
        echo "" >> "${_worker}"
        echo "" >> "${_worker}"
        echo "echo '- - - - - ${_one} - - - - - ' " >> "${_worker}"
        cd "${_pwd}"   
        _camel=$(echo "${_one}" | sed --expression 's/\([A-Z]\)/-\L\1/g' --expression 's/^-//' | sed 's/-a-d-r/-adr/')
        echo Check   src/${_camel}/  "${_one}"
        _target="${_pwd}/src/${_camel}"
        mkdir -p "${_pwd}/targets/${_one}"
        touch "${_pwd}/targets/${_one}/${_camel}.dto.ts"
        touch "${_pwd}/targets/${_one}/${_camel}.interface.ts"
        rm -rf "${_target}"
        if ( [ -n "${_camel}" ] && [ ! -e "${_target}" ] )  || ( [ ! -e "${_target}/${_camel}.module.ts" ] ); then 
        {
            echo "                   Does not exists  "${_one}"     src/${_camel}/  "
            echo "                                                  src/${_camel}/  GENERATE MODULE "${_one}" "
            _err=0
            _msg=$(nest g mo "${_one}"  --no-spec)
            _err=$?
            [ $_err -ne 0 ] && echo "                   Could not Generate Module! "${_one}" "
        } 
        fi
        if ( [ -n "${_camel}" ] && [ ! -e "${_target}" ] )  || ( [ ! -e "${_target}/${_camel}.controller.ts" ] ); then 
        {
             echo "                                                  src/${_camel}/  GENERATE CONTROLLER "${_one}" "
            _err=0
            _msg=$(nest g co "${_one}"  --no-spec) 
            _err=$?
            [ $_err -ne 0 ] && echo "                   Could not Generate Controller! "${_one}" "
        } 
        fi
        if ( [ -n "${_camel}" ] && [ ! -e "${_target}" ] )  || ( [ ! -e "${_target}/${_camel}.service.ts" ] ); then 
        {
             echo "                                                  src/${_camel}/  GENERATE SERVICE "${_one}" "
            _err=0
            _msg=$(nest g s "${_one}"  --no-spec)
            _err=$?
            [ $_err -ne 0 ] && echo "                   Could not Generate Service! "${_one}" "
        } 
        fi
        # # cd "${_camel}"
        # #   mkdir -p src/"${_one}"/dtos
        # #   nest g class "${_one}"/dtos/"${_one}".dto
        # #   echo "export * from './"${_one}"/dtos/"${_one}".dto';" > src/"${_one}"/dtos/index.ts
        # #   mkdir -p src/"${_one}"/interfaces
        # #   echo "export * from './"${_one}"/dtos/"${_one}".dto';" > src/"${_one}"/dtos/index.ts
        # if [ ! -e "${_template}" ] ; then 
        # {
            #  echo "ERROR Template Path is missing.         ${_template}  "
        # } else {
            # echo "Run "${_one}"  src/${_camel}/" 
            echo "cp -R ${_template}/* ${_target}/"   >> "${_worker}"
            # cp -R ${_template}/* "${_target}/"
            # cd "${_target}/" 
            # pwd
        # }
        # fi
        echo "${_target}/" 
        echo "cd ${_target}/" >> "${_worker}"
        echo doe Templetus "${_one}" 
        echo doe Templetus "${_one}" >> "${_worker}"
        _err=0
        # doe Templetus "${_one}"
        _err=$?
        [ $_err -ne 0 ] && echo "Doe exited with error!"

        echo "_from=\$(ls -ct1 ${_target}/*.module.ts | head -1)"  >> "${_worker}"
        echo "_to=\$(ls -ctr1 ${_target}/*.module.ts | head -1)"  >> "${_worker}"
        _from=$(ls -ct1 ${_target}/*.module.ts | head -1)
        _to=$(ls -ctr1 ${_target}/*.module.ts | head -1)
        echo "_from=${_from}"
        echo "_to=${_to}"
        # if [[ "${_from}" == "${_to}" ]] ; then
        # {
            # echo "Files are the same!"
        # } else {
            echo Copy
            cd "${_target}"    >> "${_worker}"
            echo cp "\${_from}"  "\${_to}"  >> "${_worker}" 
            echo cp "${_from}"  "${_to}" 
        #     cp "${_from}"  "${_to}" 
        # }
        # fi
      }  
      fi
    }  
    done <<< "${_routes}"
    
    "${_worker}" 
    ./generate_clean.bash

} # end generate_routes

generate_routes 

