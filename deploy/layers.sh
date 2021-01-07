#!/bin/bash
CUR_DIR="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
GQL_LAYER_DIR="${CUR_DIR}/cloudformation/build/layers/gql/nodejs"
mkdir -p $GQL_LAYER_DIR
cp "${CUR_DIR}/../package.json" $GQL_LAYER_DIR
cd $GQL_LAYER_DIR && npm install --production
