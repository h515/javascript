### 
# @Author: yaodongyi
 # @Date: 2019-08-28 10:52:48
 # @Description: shell配置
 ###
#!/usr/bin/env bash

set -e

pwd=$PWD 
 
function buildImage(){
    version=`awk '/"version":/{gsub(/"|,/,"",$2);print $2;exit;}' ${pwd}/package.json`
    rm -rf dist
    rm -rf ${pwd}/docker/dist
    npm run build
    cp -r ${pwd}/dist ${pwd}/docker/dist
    dockerImage=com.****.cloud/nginx-dev-$1
    docker build ${pwd}/docker/ -t ${dockerImage} --build-arg DIST_DIR=/dist

    ccrDockerImage=registry.cn-shenzhen.aliyuncs.com/****/nginx-$1-alpha:${version}
    echo 'ccrDockerImage='${ccrDockerImage}
    if [ -z $(docker images ${ccrDockerImage} -q) ]; then
        rm -rf dist
        rm -rf ${pwd}/docker/dist
        npm run alpha
        cp -r ${pwd}/dist ${pwd}/docker/dist
        docker build ${pwd}/docker/ -t ${ccrDockerImage} --build-arg DIST_DIR=/dist
        docker push ${ccrDockerImage}
    fi

    aliDockerImage=registry.cn-shenzhen.aliyuncs.com/****/nginx-$1:${version}
    echo 'aliDockerImage='${aliDockerImage}
    if [ -z $(docker images ${aliDockerImage} -q) ]; then
        rm -rf dist
        rm -rf ${pwd}/docker/dist
        npm run prod
        cp -r ${pwd}/dist ${pwd}/docker/dist
        docker build ${pwd}/docker/ -t ${aliDockerImage} --build-arg DIST_DIR=/dist
        docker push ${aliDockerImage}
    fi
}

npm install
buildImage webpage
docker-compose -f docker-compose.yml up -d
