import 'dotenv/config'
import fs from 'fs';
import path from 'path';
import Client from 'ssh2-sftp-client';

const sftp = new Client();

// 配置远程服务器信息
const config = {
  host: '8.141.86.20',
  port: 22,
  username: 'root',
  privateKey: fs.readFileSync(process.env.RSA_PATH)
};

// 本地 docker-compose 文件路径
const localFile = path.resolve(process.cwd(), 'docker-compose.yaml');

// 远程存放路径
const remoteFile = '/www/server/panel/data/compose/elin/docker-compose.yaml';

async function pushCompose() {
  try {
    await sftp.connect(config);
    console.log('已连接到远程服务器');

    await sftp.put(localFile, remoteFile);
    console.log(`docker-compose.yml 已上传到 ${remoteFile}`);

    await sftp.end();
    console.log('连接已关闭');
  } catch (err) {
    console.error('上传失败:', err);
  }
}

pushCompose();
