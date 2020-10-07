#!/usr/bin/env bash
#!/bin/bash
#
typeset -gr THISSCRIPTNAME="$(pwd)/$(basename "$0")"
typeset -gr THISPWD="$(pwd)"
. ./generate_error.bash

typeset -g _one=""
function generate_routes(){
    local  _camel _pwd _from _to _run  _msg _template _target _worker 
    local -i _err
    local _routes 
    local _targets
    local _import_lines 
    local _import_modules 
    local appmodule
    _pwd=$(pwd)
    _worker="${_pwd}/generate_worker.bash"
    _template="${_pwd}/src/templetus"
    _targets="${_pwd}/targets"
    file_exists_with_spaces "${_template}"
    file_exists_with_spaces "${_worker}"
    file_exists_with_spaces "${_targets}"
    _import_lines=""
    _import_modules=""
    appmodule="import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
${_import_lines}

@Module({
  imports: [
      ${_import_modules}
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

"
function addimportsmodule(){
    echo "${appmodule}"

}
# echo "${appmodule}"
# exit 0
    _routes="$(ls -1 "${_targets}")"
    [[ -z "${_routes}" ]] && echo "ERROR No rountes foud " && exit 1
    echo "#!/usr/bin/env bash" > "${_worker}" 
    echo "${appmodule}" > "${_pwd}/src/app.module.ts"
    chmod +x "${_worker}"
    function toLower(){
        echo "${@,,}" 
    }
    function toUpper(){
        echo "${@^^}" 
    }
    function toCapitze(){
        echo "${@~}"
    }
    
    local lower_case_one="${_template,,}"   # bash Convert string to lowercase Bash 4 REF: https://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
    local upper_case_one="${_template^^}"   # bash Convert string to uppercase Bash 4 REF: https://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
    local capitalized_one="${_template~}"   # bash Convert string to Toggled Bash 4 REF: https://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
    local title_one
    function Titlelize(){
        # echo "remote_available_packages" | sed -E 's/_(.)/\U\1/g' -> remoteAvailablePackages
        sed -E 's/_(.)/\U\1/g'  # REF: https://unix.stackexchange.com/questions/416656/underscore-to-camelcase
    }
    function ToCamel(){
        sed --expression 's/\([A-Z]\)/-\L\1/g' --expression 's/^-//' | sed 's/-a-d-r/-adr/'
    }


    while read -r _one; do
    {
      echo "Testing ${_one}"
      if [ -n "${_one}" ] ; then    # if not empty
      {
        # Test  
        # echo "check-checkpreloadings-loading-a-d-r" | sed --expression 's/\([A-Z]\)/-\L\1/g' --expression 's/^-//' | sed 's/-a-d-r/-adr/'
        # echo "CheckcheckPreloadingsLoadingADR" | sed --expression 's/\([A-Z]\)/-\L\1/g' --expression 's/^-//' | sed 's/-a-d-r/-adr/'
        echo "" >> "${_worker}"
        echo "echo '- - - - - ${_one} - - - - - ' " >> "${_worker}"
        cd "${_pwd}" || exit 1
        _camel=$(echo "${_one}" | ToCamel )
        echo "Check   src/${_camel}/  ${_one}"
        _target="${_pwd}/src/${_camel}"
        
        if ( ( [ -n "${_camel}" ] && [ ! -e "${_target}" ] ) || ( [ ! -e "${_target}/${_camel}.module.ts" ] ) ); then 
        {
            echo "                   Does not exists  ${_one}     src/${_camel}/  "
            echo "                                                src/${_camel}/  GENERATE MODULE ${_one} "
            _err=0
            _msg=$(nest g mo "${_one}"  --no-spec)
            _err=$?
            [ $_err -ne 0 ] && echo "                   Could not Generate Module! ${_one} "
        } 
        fi
        rm -rf "${_target}"
        cp -R "${_template}" "${_target}" 
        cp -R  "${_template}/dto" "${_target}/" 
        lower_case_one="${_one,,}"   # bash Convert string to lowercase Bash 4 REF: https://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
        upper_case_one="${_one^^}"   # bash Convert string to uppercase Bash 4 REF: https://stackoverflow.com/questions/2264428/converting-string-to-lower-case-in-bash-shell-scripting
        capitalized_one="${_one~}"
        title_one=$(echo "${_one}" | Titlelize )
        echo "_one: ${_one}"
        echo "_target: ${_target}"
        echo "_camel: ${_camel}"
        echo "title_one: ${title_one}"
        echo "capitalized_one: ${capitalized_one}"
        echo "lower_case_one: ${lower_case_one}"
        echo "upper_case_one: ${upper_case_one}"
        directory_exists_with_spaces "${_target}"
        # cd "${_target}" || exit 1
        exit 0
        äö Templetus "${title_one}"
        _msg=$(cd "${_target}" && äö Templetus "${title_one}")
        _msg=$(to_this Templetus "${title_one}")
        
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

echo "παρακαλώ 🙂
τέλεια 🙂"

exit 0
