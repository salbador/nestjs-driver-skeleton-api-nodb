#!/usr/bin/env bash
typeset -i _err=0

# -e (or -o errexit) option to the script, which will exit at the first error. 
# -E (-o errtrace): Ensures that ERR traps (see below) get inherited by functions, command substitutions, and subshell environments.
# -u (-o nounset): Treats unset variables as errors.
# -o pipefail: normally Bash pipelines only return the exit code of the last command. This option will propagate intermediate errors.
# set -Eeuo pipefail
# . Detecting when a variable is used
# declare -t VARIABLE=value
# trap "echo VARIABLE is being used here." DEBUG

load_execute_boot_basic_with_sudo(){
    if ( typeset -p "SUDO_USER"  &>/dev/null ) ; then
      typeset -rg USER_HOME=$(getent passwd $SUDO_USER | cut -d: -f6)
    else
      local USER_HOME=$HOME
    fi
    local -r provider="$USER_HOME/_/clis/execute_command_intuivo_cli/execute_boot_basic.sh"
    echo source "${provider}"
    [   -e "${provider}"  ] && source "${provider}"
    [ ! -e "${provider}"  ] && eval """$(wget --quiet --no-check-certificate  https://raw.githubusercontent.com/zeusintuivo/execute_command_intuivo_cli/master/execute_boot_basic.sh -O -  2>/dev/null )"""   # suppress only wget download messages, but keep wget output for variable
    if ( command -v failed >/dev/null 2>&1; ) ; then
    {
      return 0
    }
    else
    {
      echo -e "\n \n  ERROR! Loading execute_boot_basic.sh \n \n "
      exit 1;
    }
    fi
    return 0
} # end load_execute_boot_basic_with_sudo

load_execute_boot_basic_with_sudo
_err=$?
if [ $_err -ne 0 ] ;  then
{
  >&2 echo -e "ERROR There was an error loading load_execute_boot_basic_with_sudo Err:$_err "
  exit $_err
}
fi

function __node_version_get(){
  local _node_version=''
  if ( is_defined_and_not_empty SUDO_USER "${SUDO_USER}" ) ; then
  {
    _node_version=$(su - "${SUDO_USER}" -c 'node --version 2>&1 | cüt "v"')  # stout and stderr both get
    _err=$?
  } else {
    _node_version=$(node --version 2>&1 | cüt "v" )  # stout and stderr both get
    _err=$?
  }
  fi
  (( DEBUG )) && echo "_node_version: $_node_version --- _err: $_err"
  if [ $_err -ne 0 ] ;  then
  {
    >&2 echo -e "ERROR NodeJS There was an reading version of node  Err:$_err Output: $_node_version"
    return $_err
  }
  fi
  enforce_variable_with_value _node_version  $_node_version
  echo "$_node_version"     # Should be only output a plain list  just version number
  return 0 
} # end __node_version_get

function __node_required_get(){
  local __node_required=''
  __node_required=$(<.nvmrc)
  _err=$?
  (( DEBUG )) && echo "__node_required: $__node_required --- _err: $_err"
  if [ $_err -ne 0 ] ;  then
  {
    >&2 echo -e "ERROR There was an reading file .nvmrc (node version)  Err:$_err Output: $__node_required"
    return $_err
  }
  fi
  enforce_variable_with_value __node_required $__node_required
  echo "$__node_required"     # Should be only output a plain list  just version number
  return 0
} # end __node_required_get

function __nvm_ls(){
  local _node_in_nvm_list=''
  if ( is_defined_and_not_empty SUDO_USER "${SUDO_USER}" ) ; then
  {
    _node_in_nvm_list=$(su - $SUDO_USER -c 'nvm ls 2>&1')  # stout and stderr both get
    _err=$?
  } else {
    _node_in_nvm_list=$(nvm ls 2>&1)  # stout and stderr both get
    _err=$?
  }
  fi
  (( DEBUG )) && echo "__nvm_ls: $_node_in_nvm_list --- _err: $_err"
  if [ $_err -ne 0 ] ;  then
  {
    >&2 echo -e "ERROR There was an reading nvm ls  Err:$_err Output: $_node_in_nvm_list"
  }
  fi
  enforce_variable_with_value _node_in_nvm_list $_node_in_nvm_list
  echo "$_node_in_nvm_list"   # Should be only output a plain list
  return $_err
} # end __nvm_ls


function _version_found(){
  # Sample use:
  # if ( _version_found "${__node_required}" "${_node_in_nvm_list}" ) ; then 
  # { 
  #  echo "I thinkg is found"
  # }
  # fi 
  local _one=''
  local needle="${1}"
  local -a haystack="${@:2}"
  while read -r _one ; do 
  {
    if [[ -n "${_one}" ]] && [[ "${_one}" == *"${needle}"* ]] ; then {
      return 0
    }
    fi
  }
  done <<< "${haystack}"
  return 1
} # end _version_found

function __nvm_install(){
  function __nvm_install_on_exit() {
    echo "${BASH_COMMAND}"
    echo "${BASH_SOURCE[0]}:${BASH_LINENO[1]} ${FUNCNAME[1]} EXIT"
    exec 1>&3  # How to redirect output  REF: https://stackoverflow.com/questions/314675/how-to-redirect-output-of-an-entire-shell-script-within-the-script-itself
    cat "logs/__nvm_install.log"
  }
  trap __nvm_install_on_exit  INT ERR EXIT 
  
  local changelogfile="logs/__nvm_install.log"
  echo "$(date +%Y%m%d%H%M)">"${changelogfile}"
	exec 3>&1 1>>${changelogfile} 2>&1  # How to write output to both console and file REF: https://stackoverflow.com/questions/18460186/writing-outputs-to-log-file-and-console

  local _node_nvm_install=''
  if ( is_defined_and_not_empty SUDO_USER "${SUDO_USER}" ) ; then
  {
    _node_nvm_install=$(su - $SUDO_USER -c 'nvm install '"${1}" 2>&1)  # stout and stderr both get
    _err=$?
  } else {
    _node_nvm_install=$(nvm install "${1}" 2>&1)  # stout and stderr both get
    _err=$?
  }
  fi
  (( DEBUG )) && echo "__nvm_install: $_node_nvm_install --- _err: $_err"
  if [ $_err -ne 0 ] ;  then
  {
    >&2 echo -e "${RED} ✘ ${YELLOW_OVER_DARKBLUE}nvm install ${1}${RESET} Err:$_err Output: $_node_nvm_install"
  }
  fi
  enforce_variable_with_value _node_nvm_install $_node_nvm_install
  if [[ "${_node_nvm_install}" == *"is already installed"* ]] ;  then  # Sample msg:   v14.2.0 is already installed. Now using node v14.2.0
  {
    >&2 echo  -e "${RED} ✘ ERROR ${RESET}This Message should not appear if the other function worked properly. ${YELLOW_OVER_DARKBLUE}_version_found${RESET} Output:$_node_nvm_install Err:$_err "
    passed "${_node_nvm_install}"
  }
  fi
  [ $_err -eq 0 ] && passed "${_node_nvm_install}"
  [ $_err -ne 0 ] && >&2 echo  -e "${RED} ✘ ${RESET}${_node_nvm_install}"
  return $_err
} # end __nvm_install

function __nvm_use(){
  function __nvm_use_on_exit() {
    echo "${BASH_COMMAND}"
    echo "${BASH_SOURCE[0]}:${BASH_LINENO[1]} ${FUNCNAME[1]} EXIT"
    exec 1>&3  # How to redirect output  REF: https://stackoverflow.com/questions/314675/how-to-redirect-output-of-an-entire-shell-script-within-the-script-itself
    cat "logs/__nvm_use.log"
  }
  trap __nvm_use_on_exit INT ERR EXIT
  local changelogfile="logs/__nvm_use.log"
  echo "$(date +%Y%m%d%H%M)">"${changelogfile}"
	exec 3>&1 1>>${changelogfile} 2>&1  # How to write output to both console and file REF: https://stackoverflow.com/questions/18460186/writing-outputs-to-log-file-and-console

  local _node_nvm_use=''
  if ( is_defined_and_not_empty SUDO_USER "${SUDO_USER}" ) ; then
  {
    _node_nvm_use=$(su - $SUDO_USER -c 'nvm use '"${1}" 2>&1)  # stout and stderr both get
    _err=$?
  } else {
    _node_nvm_use=$(nvm use "${1}"' && nvm alias default '"${1}"'' 2>&1)  # stout and stderr both get
    _err=$?
  }
  fi
  (( DEBUG )) && echo "__nvm_use: $_node_nvm_use --- _err: $_err"
  if [ $_err -ne 0 ] ;  then
  {
    >&2 echo -e "${RED} ✘ ${YELLOW_OVER_DARKBLUE}nvm use ${1}${RESET} Err:$_err Output: $_node_nvm_use"
  }
  fi
  _err=$?
  enforce_variable_with_value _node_nvm_use $_node_nvm_use
  [ $_err -eq 0 ] && passed "${_node_nvm_use}"
  [ $_err -ne 0 ] && >&2 echo -e "${RED} ✘ ${RESET}${_node_nvm_use} __nvm_use returns"
  return $_err
} # end __nvm_use

function __nvm_default(){
  function __nvm_default_on_exit() {
    echo "${BASH_COMMAND}"
    echo "${BASH_SOURCE[0]}:${BASH_LINENO[1]} ${FUNCNAME[1]} EXIT"
    exec 1>&3  # How to redirect output  REF: https://stackoverflow.com/questions/314675/how-to-redirect-output-of-an-entire-shell-script-within-the-script-itself
    cat "logs/__nvm_default.log"
  }
  trap __nvm_default_on_exit INT ERR EXIT
  local changelogfile="logs/__nvm_default.log"
  echo "$(date +%Y%m%d%H%M)">"${changelogfile}"
	exec 3>&1 1>>${changelogfile} 2>&1  # How to write output to both console and file REF: https://stackoverflow.com/questions/18460186/writing-outputs-to-log-file-and-console

  local _node_nvm_default=''
  if ( is_defined_and_not_empty SUDO_USER "${SUDO_USER}" ) ; then
  {
    _node_nvm_default=$(su - $SUDO_USER -c 'nvm alias default  '"${1}" 2>&1)  # stout and stderr both get
    _err=$?
  } else {
    _node_nvm_default=$(nvm alias default "${1}" 2>&1)  # stout and stderr both get
    _err=$?
  }
  fi
  (( DEBUG )) && echo "__nvm_default: $_node_nvm_default --- _err: $_err"
  if [ $_err -ne 0 ] ;  then
  {
    >&2 echo -e "${RED} ✘ ${YELLOW_OVER_DARKBLUE}nvm alias default ${1}${RESET} Err:$_err Output: $_node_nvm_default"
  }
  fi
  _err=$?
  enforce_variable_with_value _node_nvm_default $_node_nvm_default
  [ $_err -eq 0 ] && passed "${_node_nvm_default}"
  [ $_err -ne 0 ] && >&2 echo -e "${RED} ✘ ${RESET}${_node_nvm_default} __nvm_default returns"
  return $_err
} # end __nvm_default

function ensure_node_version(){
  if ( _version_found "${1}" "$(__node_version_get)" ) ; then 
  {
    passed "NodeJS version looks good."
    return 0
  } 
  fi
  failed "NodeJS still don't match. nvm use failed. I don't know what to do. 
  Check nvm manually. Stop this. Fix mannually. Then try again."
} # end ensure_node_version

function ensure_attempt_node_use(){
  if ( __nvm_use "${1}" ) ; then 
  {
    if ( __nvm_default "${1}" ) ; then 
    {
      ensure_node_version "${1}"
      return 0
    }
    fi
  }
  fi
  echo -e "${RED} ✘ ${YELLOW_OVER_DARKBLUE}nvm use ${1}. 
  Will attempt to install ${RESET}"
  ensure_attempt_node_install "${1}"
  return 0
} # end ensure_attempt_node_use

function ensure_attempt_node_install(){
  if ( __nvm_install "${1}" ) ; then 
  {
    if ( __nvm_use "${1}" ) ; then 
    {
      if ( __nvm_default "${1}" ) ; then 
      {
        ensure_node_version "${1}"
        return 0
      }
      fi
    }
    fi
    ensure_node_version "${1}"
    return 0
  }
  fi
  failed "NodeJS nvm install did not seem to have worked. I don't know what to do. 
  Check nvm manually. Stop this. Install node ${1} manually. Then try again."
  exit 1
} # end ensure_attempt_node_install

function verify_node_correct_version(){
# verify_is_installed nvm
  verify_is_installed node
  verify_is_installed npm
  local -i _err=0
  local _node_version=$(__node_version_get)
  file_exists .nvmrc
  local __node_required=$(__node_required_get)

  if expect "NodeJS $_node_version" to be "NodeJS $__node_required"; then 
  {
    passed "NodeJS version is correct"
    return 0 
  } else {
    echo -e "${RED} ✘ NodeJS ${RESET}versions do not match. Will attempt to ${YELLOW_OVER_DARKBLUE}switch or install ${RESET}"
    if is_installed nvm ; then 
    {
      local _node_to_require=''
      _node_to_require=$(echo "${__node_required}" | cüt "NodeJS ")
      (( DEBUG )) && echo "$_node_to_require"
      local _node_in_nvm_list=''
      _node_in_nvm_list=$(__nvm_ls 2>&1)
      # _node_to_require="14.9.0"
      (( DEBUG )) && echo "_node_in_nvm_list:$_node_in_nvm_list"  
      if ( _version_found "${__node_required}" "${_node_in_nvm_list}" ) ; then 
      {
        passed "I see that nvm has this NodeJS version installed. I think is found it. 
        I think I see it in the list of nvm ls.
        Will attempt to switch. ${YELLOW_OVER_DARKBLUE}nvm use ${__node_required}${RESET}."
        ensure_attempt_node_use "${__node_required}"
      } else {
        echo -e "${RED} ✘ ${RESET}NodeJS version ${RED} not found ${RESET}in ${YELLOW_OVER_DARKBLUE}nvm ls${RESET}. 
        Will attempt to install ${RESET}"
        ensure_attempt_node_install "${__node_required}"
      } 
      fi 
    } 
    else 
    {
      failed "NodeJS don't match. NVM not installed. I don't know what to do.
      Change the version in .nvmrc to match your node js install version to able to continue
      and try again.
      
      echo 14.2.0>.nvmrc
      
      "
      exit 1
    }
    fi 
  }
  fi
  return 0
} # end verify_node_correct_version


function _npm_nest_install(){
  function __npm_nest_install_on_exit() {
    echo "${BASH_COMMAND}"
    echo "${BASH_SOURCE[0]}:${BASH_LINENO[1]} ${FUNCNAME[1]} EXIT"
    exec 1>&3  # How to redirect output  REF: https://stackoverflow.com/questions/314675/how-to-redirect-output-of-an-entire-shell-script-within-the-script-itself
    cat "logs/__npm_nest_install.log"
  }
  trap __npm_nest_install_on_exit INT ERR EXIT
  local changelogfile="logs/__npm_nest_install.log"
  echo "$(date +%Y%m%d%H%M)">"${changelogfile}"
	exec 3>&1 1>>${changelogfile} 2>&1  # How to write output to both console and file REF: https://stackoverflow.com/questions/18460186/writing-outputs-to-log-file-and-console

  local _node_npm_nest_install=''
  if ( is_defined_and_not_empty SUDO_USER "${SUDO_USER}" ) ; then
  {
    _node_npm_nest_install=$(su - $SUDO_USER -c 'npm i -g @nestjs/cli '"${1}" 2>&1)  # stout and stderr both get
    _err=$?
  } else {
    _node_npm_nest_install=$(npm i -g @nestjs/cli "${1}" 2>&1)  # stout and stderr both get
    _err=$?
  }
  fi
  (( DEBUG )) && echo "__npm_nest_install: $_node_npm_nest_install --- _err: $_err"
  if [ $_err -ne 0 ] ;  then
  {
    >&2 echo -e "${RED} ✘ ${YELLOW_OVER_DARKBLUE}npm i -g @nestjs/cli ${1}${RESET} Err:$_err Output: $_node_npm_nest_install"
  }
  fi
  _err=$?
  enforce_variable_with_value _node_npm_nest_install $_node_npm_nest_install
  [ $_err -eq 0 ] && passed "${_node_npm_nest_install}"
  [ $_err -ne 0 ] && >&2 echo -e "${RED} ✘ ${RESET}${_node_npm_nest_install} __npm_nest_install returns"
  return $_err
} # end __npm_nest_install

function _run_command(){
  # function __run_command_on_exit() {
  #   echo "${BASH_COMMAND}"
  #   echo "${BASH_SOURCE[0]}:${BASH_LINENO[1]} ${FUNCNAME[1]} EXIT"
  #   exec 1>&3  # How to redirect output  REF: https://stackoverflow.com/questions/314675/how-to-redirect-output-of-an-entire-shell-script-within-the-script-itself
  #   cat "logs/__run_command.log"
  # }
  # trap __run_command_on_exit INT ERR EXIT
  # local changelogfile="logs/__run_command.log"
  # echo "$(date +%Y%m%d%H%M)">"${changelogfile}"
	# exec 3>&1 1>>${changelogfile} 2>&1  # How to write output to both console and file REF: https://stackoverflow.com/questions/18460186/writing-outputs-to-log-file-and-console

  local _node_run_command=''
  echo -e "${PURPLE} ❓ ${CYAN}${*}"
  if ( is_defined_and_not_empty SUDO_USER "${SUDO_USER}" ) ; then
  {
    _node_run_command="$(su - $SUDO_USER -c 'cd '"${THISPWD}"' ; '"${*}"'' 2>&1)"  # stout and stderr both get
    _err=$?
  } else {
    _node_run_command="$(cd "${THISPWD}" ; "${*}" 2>&1)"  # stout and stderr both get
    _err=$?
  }
  fi
  (( DEBUG )) && echo "__run_command: ${_node_run_command} --- _err: ${_err}"
  if [ $_err -ne 0 ] ;  then
  {
    >&2 echo -e "${RED} ✘ ${YELLOW_OVER_DARKBLUE}${*}${RESET} Err:$_err Output: $_node_run_command"
  }
  fi
  _err=$?
  enforce_variable_with_value _node_run_command ${_node_run_command}
  [ $_err -eq 0 ] && passed "${_node_run_command}"
  [ $_err -ne 0 ] && >&2 echo -e "${RED} ✘ ${RESET}${_node_run_command} __run_command returns"
  return $_err
} # end __run_command


function ensure_attempt_npm_nest_install(){
  if ( _npm_nest_install "${1}" ) ; then 
  {
    verify_is_installed nest
    return 0
  }
  fi
  failed "npm failed to install NestJS. I don't know what to do. 
  Check nestjs install manually. Stop this. Install nestjs ${1} manually. Then try again."
  exit 1
} # end ensure_attempt_node_install

    function toLower(){
        echo "${@,,}"
    }
    function toUpper(){
        echo "${@^^}"
    }
    function toCapitze(){
        echo "${@~}"
    }

    function Titlelize(){
        # echo "remote_available_packages" | sed -E 's/_(.)/\U\1/g' -> remoteAvailablePackages
        sed -E 's/_(.)/\U\1/g'  # REF: https://unix.stackexchange.com/questions/416656/underscore-to-camelcase
    }
    function ToCamel(){
        sed --expression 's/\([A-Z]\)/-\L\1/g' --expression 's/^-//' | sed 's/-a-d-r/-adr/'
    }


function check_system_requirements(){
  ( it_exists_with_spaces "logs" ) && rm -rf logs
  directory_does_not_exist logs
  mkdir -p logs
  directory_exists logs
  it_does_not_exist_with_spaces .required_git && verify_is_installed git && touch .required_git   
  it_does_not_exist_with_spaces .required_awk && verify_is_installed awk  && touch .required_awk 
  it_does_not_exist_with_spaces .required_date && verify_is_installed date  && touch .required_date   
  # verify_installed_version "node --version"  "$(cat .nvmrc 2>&1)"
  verify_node_correct_version 
  # if is_not_installed nest ; then
  # {
  #   echo -e "${RED} ✘ nestjs ${RESET} not installed. Will attempt to install. ${YELLOW_OVER_DARKBLUE}npm i -g @nestjs/cli${RESET}. 
  #       Will attempt to install ${RESET}"
  #   ensure_attempt_npm_nest_install " "
  # }
  # fi
  it_does_not_exist_with_spaces .required_npm_install && _run_command npm install &&   touch .required_npm_install 
  directory_exists node_modules

} 
check_system_requirements 

