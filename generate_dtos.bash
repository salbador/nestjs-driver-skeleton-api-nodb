#!/usr/bin/env bash
#!/bin/bash
#
. ./generate_error.bash

function generate_targets(){
    local _targets 

    _targets="
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
    local _one _camel _pwd  _target _worker 
    _pwd=$(pwd)
    _worker="${_pwd}/generate_worker.bash"
    echo "#!/usr/bin/env bash" > "${_worker}" 
    chmod +x "${_worker}"
    while read -r _one; do
    {
      echo "Testing ${_one}"
      if [ -n "${_one}" ] ; then    # if not empty
      {
        echo "" >> "${_worker}"
        echo "echo '- - - - - ${_one} - - - - - ' " >> "${_worker}"
        cd "${_pwd}" || exit 1
        _camel=$(echo "${_one}" | sed --expression 's/\([A-Z]\)/-\L\1/g' --expression 's/^-//' | sed 's/-a-d-r/-adr/')
        echo "Check   src/${_camel}/  ${_one}"
        _target="${_pwd}/targets/${_one}"
        mkdir -p "${_target}"
        touch "${_target}/${_camel}.dto.ts"
        touch "${_target}/${_camel}.interface.ts"
        touch "${_target}/${_camel}.controller.ts"
        touch "${_target}/${_camel}.service.ts"

      }  
      fi
    }  
    done <<< "${_targets}"
    
} # end generate_targets

generate_targets 

