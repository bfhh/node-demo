[toc]
## 1 使用express-generator脚手架生成express开发环境

```
npm install express-generator -g --registry https://registry.npm.taobao.org
```

## 2 创建项目

```
express blog
```

- blog： 项目的名称，根目录

## 3 安装nodemon   cross-env

- `nodemon`是一个实用程序，它将监视源中的任何更改并自动重新启动服务器
- `cross-env`它是运行跨平台设置和使用环境变量(Node中的环境变量)的脚本。
- nodemon是前台运行的程序，不是后台运行的

```
npm install nodemon cross-env --save --registry https://registry.npm.taobao.org
```

---

修改`package.json`,添加`dev`

```
"scripts": {
    "start": "node ./bin/www",
    "dev": "cross-env NODE_ENV=dev nodemon ./bin/www" 
  },
```

## 7 日志写入文件

默认的日志输出如下：

```
app.use(logger('dev'));
```

`app.use`有第二个参数，默认是输出到控制台

```
app.use(
    logger('dev'), {
        stream: process.stdout
    }
)
```

## 8 pm2后台守护进程

```
npm install pm2 -g --registry https://registry.npm.taobao.org
pm2 --version
```

`package.json`中添加启动命令

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
     "dev": "cross-env NODE_ENV=production pm2 start /bin/www"， //express框架
     "prd": "cross-env NODE_ENV=production pm2 start app.js"	//默认的nodejs程序
  },
```

---

**pm2常用命令**

```
$ npm run prd

> pm2@1.0.0 prd F:\CodeDemo\node-demo\pm2test
> cross-env NODE_ENV=production pm2 start app.js

[PM2] Starting F:\CodeDemo\node-demo\pm2test\app.js in fork_mode (1 instance)
[PM2] Done.
┌─────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ app    │ default     │ 1.0.0   │ fork    │ 14788    │ 0s     │ 0    │ online    │ 0%       │ 28.3mb   │ Adminis… │ disabled │
└─────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘

```

查看所有后台进程情况

```
$ pm2 list
┌─────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ app    │ default     │ 1.0.0   │ fork    │ 14788    │ 42s    │ 0    │ online    │ 0%       │ 24.4mb   │ Adminis… │ disabled │
└─────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
```

查看某个后台程序详情

`pm2  info  id/name`

```
$ pm2 info 0/app
Describing process with id 0 - name app
Describing process with id 0 - name app
┌───────────────────┬────────────────────────────────────────────────┐
│ status            │ online                                         │
│ name              │ app                                            │
│ namespace         │ default                                        │
│ version           │ 1.0.0                                          │
│ restarts          │ 0                                              │
│ uptime            │ 106s                                           │
│ script path       │ F:\CodeDemo\node-demo\pm2test\app.js           │
│ script args       │ N/A                                            │
│ error log path    │ C:\Users\Administrator\.pm2\logs\app-error.log │
│ out log path      │ C:\Users\Administrator\.pm2\logs\app-out.log   │
│ pid path          │ C:\Users\Administrator\.pm2\pids\app-0.pid     │
│ interpreter       │ node                                           │
│ interpreter args  │ N/A                                            │
│ script id         │ 0                                              │
│ exec cwd          │ F:\CodeDemo\node-demo\pm2test                  │
│ exec mode         │ fork_mode                                      │
│ node.js version   │ 14.15.3                                        │
│ node env          │ production                                     │
│ watch & reload    │ ✘                                              │
│ unstable restarts │ 0                                              │
│ created at        │ 2021-04-08T02:14:43.108Z                       │
└───────────────────┴────────────────────────────────────────────────┘
 Revision control metadata
...
```

**手动重启**

```
$ pm2 restart 0/app
Use --update-env to update environment variables
[PM2] Applying action restartProcessId on app [0](ids: [ '0' ])
[PM2] [app](0) ✓
┌─────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ app    │ default     │ 1.0.0   │ fork    │ 5204     │ 0s     │ 1    │ online    │ 0%       │ 28.1mb   │ Adminis… │ disabled │

```

查看日志

```
$ pm2 log app
[TAILING] Tailing last 15 lines for [app] process (change the value with --lines option)
C:\Users\Administrator\.pm2\logs\app-error.log last 15 lines:
C:\Users\Administrator\.pm2\logs\app-out.log last 15 lines:
0|app      | server is listening on 8000...
0|app      | server is listening on 8000...
0|app      | server is listening on 8000...
```

停止进程

```
$ pm2 stop app
[PM2] Applying action stopProcessId on app [app](ids: [ 1 ])
[PM2] [app](1) ✓
┌─────┬──────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name         │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼──────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 1   │ app          │ default     │ 1.0.0   │ fork    │ 0        │ 0      │ 3    │ stopped   │ 0%       │ 0b       │ Adminis… │ disabled │
│ 0   │ xiexinapp    │ default     │ 1.0.0   │ fork    │ 0        │ 0      │ 32   │ errored   │ 0%       │ 0b       │ Adminis… │ enabled  │
└─────┴──────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
```

删除进程

```
$ pm2 delete app
[PM2] Applying action deleteProcessId on app [app](ids: [ 1 ])
[PM2] [app](1) ✓
┌─────┬──────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name         │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼──────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ xiexinapp    │ default     │ 1.0.0   │ fork    │ 0        │ 0      │ 32   │ errored   │ 0%       │ 0b       │ Adminis… │ enabled  │
└─────┴──────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘

```





