CUR_DIR="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
STACK_NAME=`cat ${CUR_DIR}/../project.name`
aws cloudformation delete-stack --stack-name $STACK_NAME