# 使用官方 nginx 镜像作为部署环境
FROM crpi-a7p27yxlrmekg1a3.cn-beijing.personal.cr.aliyuncs.com/elin-common/nginx:latest AS deploy

# 复制自定义 Nginx 配置
COPY nginx.conf /etc/nginx/nginx.conf

# 替换指定字符串
ARG COZE_TOKEN
RUN sed -i "s/COZE_TOKEN/${COZE_TOKEN}/g" /etc/nginx/nginx.conf

COPY ssl ssl

# 暴露 80 443端口
EXPOSE 80 443

# 启动 nginx
CMD ["sh", "-c", "sleep 10 && nginx -g 'daemon off;'"]
