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
trap kill INT

gitfile="
# compiled output
/dist
/node_modules

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# OS
.DS_Store

# Tests
/coverage
/.nyc_output

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# dotenv environment variables file
.env
.env.test
"

function generate_clean(){
  local _routes 
  echo Removing all node modules 
  rm -rf node_modules

  echo Removing all "$(date +"%Y%m%d")"
  remove "$(date +"%Y%m%d")"
  local _folders=$(cat src/app.module.ts | grep Module | grep import | cut -d"/" -f2 - | cüt "';" | grep -v "common") # | cüt ".module")
  local _baselist=$(cat src/app.module.ts | grep Module | grep import | cut -d"/" -f2- | cüt "';" | cüt "module" )
  local _protectedModules=$(cat src/app.module.ts | grep Module | grep import | cut -d"/" -f2- | cüt "';" )
  local _one _camel _pwd _from _to _run  _msg _template _target _base _controller _service
  local -fr _delete 
  function _delete(){
      local _target="${*}"
      if [[ -e "${_target}" ]] ; then 
      {
        echo Deleting  "${_target}" 
        rm "${_target}"
      } else {
        echo "${_target}" path does not exists
      }
      fi
  } # end _delete
  local -i _err
  _pwd=$(pwd)
  echo Resetting .gitignore
  echo "${gitfile}" > "${_pwd}/.gitignore" 
  echo Resetting .nurignore_files
  echo -e "generate_routes.bash\ngenerate_worker.bash\ngenerate_clean.bash\n" > "${_pwd}/.nurignore_files"   
  echo Resetting .nurignore_dirs
  echo -e ".git\n" > "${_pwd}/.nurignore_dirs" 
  echo Resetting .ersetzeignore_files
  echo -e "generate_routes.bash\ngenerate_worker.bash\ngenerate_clean.bash\n" > "${_pwd}/.ersetzeignore_files" 
  echo Resetting .ersetzeignore_dirs
  echo -e ".git\n" > "${_pwd}/.ersetzeignore_dirs" 
  _template="${_pwd}/src/templetus"
  _base="${_pwd}/src"
  local -fr _loop_delete_baselist 
  local -i _count=0
  function _loop_delete_baselist(){
    local _context="${1}"
    while read -r _one; do
    {
      echo "Testing ${_one}"
      if [ -n "${_one}" ] ; then    # if not empty
      {
        _target="${_base}/${_one}${_context}.ts"
        _delete "${_target}"
        # (( _count++ ))
        # if (( _count > 5 )) ; then 
        # {
        #   exit 0
        # }
        # fi
      }  
      fi
    }  
    done <<< "${_baselist}"
  } # end _loop_delete
  _loop_delete_baselist controller 
  _loop_delete_baselist service 
   local -fr _loop_delete__folders_inside 
  function _loop_delete__folders_inside(){
    local _context="${1}"
    while read -r _one; do
    {
      echo "Testing ${_one}"
      if [ -n "${_one}" ] ; then    # if not empty
      {
        _target="${_pwd}/src/${_one}"
        if [[ -e "${_target}" ]] ; then 
        {
          # mkdir -p _target="${_pwd}/src/.git"
          . cd "${_target}" 
          # äö templetu ${_one}
          # to_this templetu ${_one}
          # rm -rf -p "${_pwd}/src/.git"
          _delete "${_target}/.gitignore"
          _delete "${_target}/.dir_bash_history"
          _delete "${_target}/.ersetzeignore_dirs"
          _delete "${_target}/.ersetzeignore_files"
          _delete "${_target}/.nurignore_dirs"
          _delete "${_target}/.nurignore_files"
          _target=$(ls -1 ${_target}/*.module.ts | grep -v "${_one}/${_one}")
          _delete "${_target}"
          # (( _count++ ))
          # if (( _count > 1 )) ; then 
          # {
          #   exit 0
          # }
          # fi
        }
        fi        
      }  
      fi
    }  
    done <<< "${_folders}"
  } # end _loop_delete 
  _loop_delete__folders_inside "${_one}"

} # end generate_clean

generate_clean


