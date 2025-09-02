# Elin 网关服务

一个nginx网关总服务---容器编排，代理所有子服务项目。

## 修改

`elin-gateway` 和 `elin-db` 两个服务可以直接在本项目里修改，然后`pnpm build`。

其它服务需要在各自项目里修改并推送到镜像仓库，本项目只拉取最新镜像。

## 本地模拟运行

为了方便本地测试，可以使用 `docker compose up` 命令在本地运行网关服务。

> copy .env.example 为 .env 即可修改环境变量

浏览器访问`http://localhost` 即可访问。主页是`Elin-Blog`

## 同步到远程

确认本地运行没问题后，可以同步到远程服务器。

### 推送最新镜像

```bash
pnpm push
```

### 推送 docker-compose.yaml 到远程服务器

需要先在远程服务器增添公钥，然后修改本地私钥路径 `RSA_PATH` 环境变量

```bash
pnpm push-compose
```


