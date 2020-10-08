#!/usr/bin/env bash
#!/bin/bash
#
typeset -gr THISSCRIPTNAME="$(pwd)/$(basename "$0")"
typeset -gr THISPWD="$(pwd)"
. ./generate_error.bash


function generate_dtos(){
    local _targets

    _targets=$(grep -v "^#" <<<"
GetWeight
InitiateWeiging
# ${title_one}
CheckVehicles
${title_one}LoadingAdr
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
")
    local _one _camel _pwd  _target _worker
    _pwd=$(pwd)
    _worker="${_pwd}/generate_worker.bash"
    echo "#!/usr/bin/env bash" > "${_worker}"
    file_exists "${_worker}"
    chmod +x "${_worker}"
    _target="${_pwd}/src"
    mkdir -p "${_target}"
    directory_exists "${_pwd}/src"
    local lower_case_one="${_worker,,}"   # bash Convert string to lowercase Bash 4 REF: https://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
    local upper_case_one="${_worker^^}"   # bash Convert string to uppercase Bash 4 REF: https://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
    local capitalized_one="${_worker~}"   # bash Convert string to Toggled Bash 4 REF: https://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
    local title_one
    local dto_name
    local dto_name_file
    local module_name
    local module_name_file
    local folder_name_file
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
        module_name="${title_one}Module"
        dto_name_file="${_camel}.dto.ts"
        module_name_file="${_camel}.module.ts"
        folder_name_file="${_camel}"
        echo "_one: ${_one}"
        echo "_target: ${_target}"
        echo "_camel: ${_camel}"
        echo "title_one: ${title_one}"
        echo "capitalized_one: ${capitalized_one}"
        echo "lower_case_one: ${lower_case_one}"
        echo "upper_case_one: ${upper_case_one}"


if [ ! -d "${_target}/${folder_name_file}" ] ; then
{
        mkdir -p "${_target}/${folder_name_file}"
        directory_exists "${_target}/${folder_name_file}"
if [ ! -e "${_target}/${folder_name_file}/${dto_name_file}" ] ; then
{
        # _run_command
        touch "${_target}/${folder_name_file}/${dto_name_file}"
        # echo "${dto_name}" > "${_target}"
echo "import { ApiProperty } from '@nestjs/swagger'

export class ${dto_name} {
  id: string
  @ApiProperty()
  name: string
}" > "${_target}/${folder_name_file}/${dto_name_file}"

}
fi
if [ ! -e "${_target}/${folder_name_file}/${module_name_file}" ] ; then
{
        touch "${_target}/${folder_name_file}/${module_name_file}"
echo "import {  Module } from '@nestjs/common';
import { ${title_one}Controller } from './${_camel}.controller';
import { ${title_one}Service } from './${_camel}.service';

@Module({
  controllers: [${title_one}Controller],
  providers: [${title_one}Service]
})
export class ${module_name} {}
" > "${_target}/${folder_name_file}/${module_name_file}"

}
fi
if [ ! -e "${_target}/${folder_name_file}/${_camel}.rest" ] ; then
{
        touch "${_target}/${folder_name_file}/${_camel}.rest"
echo "
###
POST http://localhost:3000/${title_one}
Content-Type: application/json

{
    \"name\": \"string\"
}

" > "${_target}/${folder_name_file}/${_camel}.rest"

}
fi
if [ ! -e "${_target}/${folder_name_file}/${_camel}.data.ts" ] ; then
{
        touch "${_target}/${folder_name_file}/${_camel}.data.ts"
echo "

import { ${title_one}Dto } from './${_camel}.dto';

export const ${capitalized_one}Dto: ${title_one}Dto =  {
  id: '0',
  name: \"Hamburg\"
}


" > "${_target}/${folder_name_file}/${_camel}.data.ts"

}
fi
if [ ! -e "${_target}/${folder_name_file}/${_camel}.interface.ts" ] ; then
{
        touch "${_target}/${folder_name_file}/${_camel}.interface.ts"
echo "
export interface ${title_one}Interface {
  id?: string
  name: string
}
" > "${_target}/${folder_name_file}/${_camel}.interface.ts"

}
fi
if [ ! -e "${_target}/${folder_name_file}/${_camel}.json" ] ; then
{
        touch "${_target}/${folder_name_file}/${_camel}.json"
echo "

{
    \"name\": \"string\"
}

" > "${_target}/${folder_name_file}/${_camel}.json"

}
fi
if [ ! -e "${_target}/${folder_name_file}/${_camel}.service.ts" ] ; then
{
        touch "${_target}/${folder_name_file}/${_camel}.service.ts"
echo "
import { Injectable } from '@nestjs/common';
import { ${title_one}Dto } from './${_camel}.dto';
import { ${capitalized_one}Dto } from './${_camel}.data';

@Injectable()
export class ${title_one}Service {

    ${title_one}Construct: ${title_one}Dto[] = [
        { id: '1',...${capitalized_one}Dto  },
        { id: '2', ...${capitalized_one}Dto }
    ]

    ${capitalized_one}Service(${capitalized_one}Dto: ${title_one}Dto): ${title_one}Dto {
        this.${title_one}Construct.push(${capitalized_one}Dto)
        return ${capitalized_one}Dto
    }
}

" > "${_target}/${folder_name_file}/${_camel}.service.ts"

}
fi
if [ ! -e "${_target}/${folder_name_file}/${_camel}.controller.ts" ] ; then
{
        touch "${_target}/${folder_name_file}/${_camel}.controller.ts"
echo "import { Controller, Post, Body, } from '@nestjs/common';
import axios from 'axios';
import { ${title_one}Service } from './${_camel}.service';
import { ${title_one}Interface } from './${_camel}.interface';
import { ${title_one}Dto } from './${_camel}.dto';
import { UserDto, UserService, UserInterface } from '../user/user.module';
@Controller('${capitalized_one}')
export class ${title_one}Controller {
    constructor(
      private service: ${title_one}Service
    ) {}
    @Post()
    async post(@Body() userDto: UserDto): Promise<any>{
        const params = JSON.stringify(userDto);
        return await axios.post('http://localhost:3000/user',
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then(res => {
                  console.log(res.data);
                  return res.data
              })
        }

    @Post('/model')
    modelPost(@Body() ${capitalized_one}Dto: ${title_one}Dto):  ${title_one}Interface {
        return this.service.${capitalized_one}Service(${capitalized_one}Dto)
    }
}
" > "${_target}/${folder_name_file}/${_camel}.controller.ts"

}
fi
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

