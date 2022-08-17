// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/blog
//http://localhost:3000/blogpost/feed-afghan-hound
import * as fs from "fs";
export default async function handler(req, res) {
  let directory = await fs.promises.readdir(`blogdata`);
  let myfile;
  let allBlogs = [];
  for (let counter = 0; counter < directory.length; counter++) {
    myfile = await fs.promises.readFile(`blogdata/${directory[counter]}`, {
      encoding: "utf-8",
    });
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogs);
}
