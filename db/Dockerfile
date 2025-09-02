# 使用官方 MySQL 镜像作为基础镜像
FROM crpi-a7p27yxlrmekg1a3.cn-beijing.personal.cr.aliyuncs.com/elin-common/mysql-5.7:latest

# 初始root密码，容器化后请第一时间改掉
ENV MYSQL_ROOT_PASSWORD=123456 

# 初始数据库
ENV MYSQL_DATABASE=blog

# 复制本地的 my.cnf 配置文件到容器的 /etc/mysql/目录
COPY ./my.cnf /etc/mysql/my.cnf

# 配置 MySQL 的字符集和时区
CMD ["mysqld", "--character-set-server=utf8mb4", "--collation-server=utf8mb4_general_ci", "--default-time-zone=+08:00"]
