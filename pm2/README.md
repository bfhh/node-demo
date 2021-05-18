## 安装PM2

```
npm install -g pm2
```

## 初始化项目

```
cd pm2
npm init 
```

## 安装 cross-env nodemon

```
npm install cross-env nodemon --save 
```

## 配置启动环境

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "cross-env NODE_ENV=dev nodemon app.js",
    "prd": "cross-env NODE_ENV=production pm2 start app.js"
  },
```

## pm2常用命令

**查看信息**

```
$ pm2 list
┌─────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ app    │ default     │ 1.0.0   │ fork    │ 3144     │ 2m     │ 0    │ online    │ 0%       │ 24.8mb   │ Adminis… │ disabled │
└─────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘


```

****

**查看详情**

```
pm2 info id/name
```

**重启**

```
pm2 restart id/name
```

**删除**

```
pm2 delete id/name
```

**日志**

pm2会自动记录日志，比如`console.log`  `console.err`,同事会将他们分别保存在不同的文件中

```
pm2 log id/name
```

结果如下

```
$ pm2 log app
[TAILING] Tailing last 15 lines for [app] process (change the value with --lines option)
C:\Users\Administrator\.pm2\logs\app-out.log last 15 lines:
0|app      | server is listening on port 8000...
0|app      | server is listening on port 8000...
0|app      | server is listening on port 8000...
0|app      | server is listening on port 8000...
0|app      | server is listening on port 8000...
0|app      | server is listening on port 8000...
0|app      | server is listening on port 8000...
0|app      | server is listening on port 8000...
0|app      | server is listening on port 8000...
0|app      | server is listening on port 8000...
0|app      | server is listening on port 8000...
0|app      | cur time is 1621323939245
0|app      | cur time is 1621323939334
0|app      | cur time is 1621323941149
0|app      | cur time is 1621323941211


C:\Users\Administrator\.pm2\logs\app-error.log last 15 lines:
0|app      |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
0|app      |     at Module.load (internal/modules/cjs/loader.js:928:32)
0|app      |     at Function.Module._load (internal/modules/cjs/loader.js:769:14)
0|app      |     at Object.<anonymous> (C:\Program Files\nodejs\node_modules\pm2\lib\ProcessContainerFork.js:33:23)
0|app      |     at Module._compile (internal/modules/cjs/loader.js:1063:30) {
0|app      |   code: 'EADDRINUSE',
0|app      |   errno: -4091,
0|app      |   syscall: 'listen',
0|app      |   address: '::',
0|app      |   port: 8000
0|app      | }
0|app      | 假装出错 1621323939245
0|app      | 假装出错 1621323939335
0|app      | 假装出错 1621323941149
0|app      | 假装出错 1621323941211

```

##  进程守护配置

根目录下创建`pm2.config.json `文件

```
{
  "apps": {
    "name": "xiexinapp",				   //app名称
    "script": "/bin/www",					   //启动入口
    "watch": true,						   //项目文件变化自动重启
    "ignore_watch": [					   //配置哪些文件变化不重启
      "node_modules",
      "logs"
    ],
    "error_file": "logs/err.log",			 //错误日志保存文件
    "out_file": "logs/out.log",				 //正常日志保存文件
    "log_date_format": "YYYY-MM-DD HH:mm:ss" //每一天日志都添加一个时间戳
  }
}
```

修改`package.json`文件

```
 "scripts": {
    "start": "node ./bin/www",
    "dev": "cross-env NODE_ENV=dev nodemon ./bin/www",
    "prd": "cross-env NODE_ENV=production pm2 pm2.config.json"
  },
```

