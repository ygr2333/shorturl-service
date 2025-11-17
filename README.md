# shorturl-service
高并发短链生成与跳转服务
# ShortURL Service 🔗  
一个支持高并发访问、Redis 缓存加速的短链生成与跳转服务。  
支持短链统计、自定义短链、点击日志记录、Docker 一键部署。

---

## ✨ 项目特点
- 🚀 **高并发架构**：Redis 缓存提升读性能，跳转接口可轻松支撑高 QPS  
- 🔧 **分布式 ID（Snowflake）**：生成全局唯一短链 ID  
- 📊 **访问统计**：记录点击次数、来源、User-Agent、时间  
- 🗂 **多层架构**：Controller / Service / Database / Cache  
- 🐳 **Docker 部署**：一个命令启动完整服务  
- 📝 **RESTful API**：文档完整、易于扩展  

---

## 🏗 技术栈
| 层级 | 技术 |
|-----|------|
| 后端 | Node.js / Express |
| 缓存 | Redis |
| 数据库 | MySQL |
| 部署 | Docker + Docker Compose |
| 其他 | Snowflake ID、Nginx、PM2 |

---

## 📂 项目结构
```
shorturl-service/
├── src/
│   ├── app.js
│   ├── routes/short.js
│   ├── controllers/shortController.js
│   ├── services/shortService.js
│   ├── utils/idGenerator.js
│   ├── config/db.js
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

## 🔌 接口文档

### 1️⃣ 创建短链  
**POST** `/api/short`

请求体：
```json
{
  "url": "https://google.com"
}
```

返回：
```json
{
  "shortId": "aB12x",
  "shortUrl": "https://yourdomain.com/aB12x"
}
```

---

### 2️⃣ 跳转短链  
**GET** `/:shortId`  
302 → 原始 URL

---

### 3️⃣ 查询短链统计  
**GET** `/api/short/:id/stats`

返回：
```json
{
  "totalClicks": 32,
  "lastAccess": "2025-01-01 10:23:32",
  "ua": "...",
  "referer": "..."
}
```

---

## 🐳 使用 Docker 启动

```bash
docker-compose up -d
```

访问：

```
http://localhost:3000
```

---



---

##  TODO
- [ ] 自定义短链别名  
- [ ] 后台管理界面  
- [ ] 访问可视化统计图表（Grafana）  
- [ ] 多节点水平扩展（K8s）





