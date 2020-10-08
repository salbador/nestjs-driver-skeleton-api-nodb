#!/usr/bin/env bash
#!/bin/bash
#
typeset -gr THISSCRIPTNAME="$(pwd)/$(basename "$0")"
typeset -gr THISPWD="$(pwd)"
. ./generate_error.bash


function generate_dtos(){
    local _targets

    _targets=$(grep -v "^#" <<<"
AdditionalInfoTemplate
AdditionalTerminalService
ADRCheckData
AuthorizationId
AuthorizationIdTemplate
AuthPosition
# CheckDriver
Checkin
CheckinHeader
CheckResponse
# ClientContextEnum
# CultureInfoEnum
DailyShifts
DateTime
# Driver
GravimetricQuantity
Location
NullableLocation
# Person
PrintableDocument
ProductQuantity
Quantity
Status
TPUTYPE
TransportPosition
# UserData
# UserIdData
Vehicle
VehicleInfo
VehicleInfoHeader
WeeklyShifts
")
    local _one _camel _pwd  _target _worker
    _pwd=$(pwd)
    _worker="${_pwd}/generate_worker.bash"
    echo "#!/usr/bin/env bash" > "${_worker}"
    file_exists "${_worker}"
    chmod +x "${_worker}"
    mkdir -p "${_pwd}/dtos"
    directory_exists "${_pwd}/dtos"
    local lower_case_one="${_worker,,}"   # bash Convert string to lowercase Bash 4 REF: https://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
    local upper_case_one="${_worker^^}"   # bash Convert string to uppercase Bash 4 REF: https://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
    local capitalized_one="${_worker~}"   # bash Convert string to Toggled Bash 4 REF: https://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
    local title_one
    local dto_name
    local dto_name_file
    while read -r _one; do
    {
      echo "Testing ${_one}"
      if [ -n "${_one}" ] ; then    # if not empty
      {
        echo "" >> "${_worker}"
        echo "echo '- - - - - ${_one} - - - - - ' " >> "${_worker}"
        cd "${_pwd}" || exit 1
        _camel=$(echo "${_one}" | ToCamel )
        lower_case_one="${_one,,}"   # bash Convert string to lowercase Bash 4 REF: https://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
        upper_case_one="${_one^^}"   # bash Convert string to uppercase Bash 4 REF: https://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
        capitalized_one="${_one~}"
        title_one=$(echo "${_one}" | Titlelize )
        dto_name="${title_one}Dto"
        dto_name_file="${_camel}.dto.ts"
        echo "_one: ${_one}"
        echo "_target: ${_target}"
        echo "_camel: ${_camel}"
        echo "title_one: ${title_one}"
        echo "capitalized_one: ${capitalized_one}"
        echo "lower_case_one: ${lower_case_one}"
        echo "upper_case_one: ${upper_case_one}"

        _target="${_pwd}/dtos/${dto_name_file}"
if [ ! -e "${_target}" ] ; then
{
        # _run_command
        touch "${_target}"
        # echo "${dto_name}" > "${_target}"
echo "import { ApiProperty } from '@nestjs/swagger'

export class ${dto_name} {
  id: string
  @ApiProperty()
  name: string
}" > "${_target}"

}
fi
      }
      fi
    }
    done <<< "${_targets}"

    "${_worker}"
    chown -R "${SUDO_USER}":"${SUDO_USER}" "${_pwd}/dtos"

} # end generate_dtos

generate_dtos

