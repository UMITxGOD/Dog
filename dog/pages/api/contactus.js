import mysql from "mysql2";
const db = mysql.createConnection({
  host: "localhost",
  user: "umit",
  password: "Umit@111",
  database: "dog",
});
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, emailId, contactNo } = req.body;
      const query =
        "insert into `contactus` (`name`,`emailId`,`contactNo`) values (?,?,?)";
      const result = db.query(query, [name, emailId, contactNo]);
      res.status(200).send(JSON.stringify(result[0]));
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(404).json({ api: "success", result: false });
  }
}
