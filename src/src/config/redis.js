const { createClient } = require("redis");

const redis = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379"
});

redis.connect().catch(console.error);

module.exports = redis;
