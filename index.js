import express from "express";
import mongoDbConnection from "./connection.js";
import route  from "./routes/url.js"

const app = express();
const PORT = 3001;

app.use(express.json())

mongoDbConnection("mongodb://127.0.0.1:27017/url-shortner")
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(`err : ${err}`));

app.use('/url', route)

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
