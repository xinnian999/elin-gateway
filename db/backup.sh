#!/bin/bash

# 配置
DATE=$(date +"%Y-%m-%d-%H-%M")
CONTAINER_NAME=elin-db
BACKUP_DIR=/root/backup/mysql-volumes  # 建议用绝对路径
MYSQL_USER=root
MYSQL_PASSWORD=123456

# 创建备份目录
mkdir -p ${BACKUP_DIR}

# 备份
docker exec ${CONTAINER_NAME} \
  sh -c "mysqldump -u${MYSQL_USER} -p${MYSQL_PASSWORD} --all-databases" \
  > ${BACKUP_DIR}/backup-${DATE}.sql

# 保留最近 30 个
ls -1t ${BACKUP_DIR}/backup-*.sql | tail -n +30 | xargs rm -f