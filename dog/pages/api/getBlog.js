import * as fs from "fs";
//http://localhost:3000/blogpost/feed-afghan-hound
export default async function getBlog(req, res) {
  const content = await fs.promises.readFile(
    `blogdata/${req.query.slug}.json`,
    {
      encoding: "utf-8",
    }
  );
  if (!content) {
    return res.status(200).json({ status: "complete", content: "Not Found" });
  }
  res.status(200).json(JSON.parse(content));
}
