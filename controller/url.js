import URL from "../model/url.js";
import { nanoid } from "nanoid";

export async function handleCreateShorterUrlId(req, res) {
  const body = req.body;
  if (!body) return res.status(400).json({ msg: "All fields are required" });
  const shortId = nanoid(4);
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    viewHistory: [],
  });

  return res.render("home", {
    urlID: shortId,
  });
}

export async function handleRedirectUrl(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        viewHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  res.redirect(result.redirectUrl);
}

export async function handleUrlAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({
    shortId,
  });
  return res.json({
    visits: result.viewHistory.length,
    details: result.viewHistory,
  });
}

export async function handleUrlUI(req, res) {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
}
