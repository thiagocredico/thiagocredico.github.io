#!/bin/bash

### GIT FILTER-REPO ###

## NÃO EXECUTE ESSE SCRIPT DIRETAMENTE
## Esse script foi feito para uso do
## script 'trybe-publisher' fornecido
## pela Trybe.

[[ $# == 1 ]] &&
  [[ $1 == "trybe-security-parameter" ]] &&
  git filter-repo \
    --path __tests__ \
    --path .github \
    --path .trybe \
    --path .vscode \
    --path trybe.yml \
    --path trybe-filter-repo.sh \
    --path README.md \
    --path public \
    --path jest.config.js \
    --path images \
    --invert-paths --force --quiet
