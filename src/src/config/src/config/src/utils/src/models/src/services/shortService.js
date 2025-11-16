const redis = require("../config/redis");
const shortModel = require("../models/shortModel");
const generateId = require("../utils/idGenerator");

async function createShortUrl(url) {
  const shortId = generateId();

  await shortModel.createShort(shortId, url);

  // 写入 Redis
  await redis.set(shortId, url);

  return shortId;
}

async function resolveShortUrl(shortId) {
  // 先查 Redis
  let url = await redis.get(shortId);

  if (url) return url;

  // 查数据库
  const record = await shortModel.getUrlById(shortId);
  if (!record) return null;

  // 回填 Redis
  await redis.set(shortId, record.original_url);

  return record.original_url;
}

module.exports = {
  createShortUrl,
  resolveShortUrl,
};
