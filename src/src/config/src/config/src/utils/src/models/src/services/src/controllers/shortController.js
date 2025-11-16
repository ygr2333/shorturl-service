const shortService = require("../services/shortService");

async function createShort(req, res) {
  const { url } = req.body;

  if (!url) return res.status(400).json({ message: "Missing URL" });

  const id = await shortService.createShortUrl(url);

  return res.json({
    shortId: id,
    shortUrl: `${process.env.BASE_URL}/${id}`
  });
}

async function redirect(req, res) {
  const { shortId } = req.params;

  const url = await shortService.resolveShortUrl(shortId);

  if (!url) return res.status(404).send("Not found");

  return res.redirect(url);
}

module.exports = {
  createShort,
  redirect,
};
