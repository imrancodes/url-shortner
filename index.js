import express from "express";
import mongoDbConnection from "./connection.js";
import route from "./routes/url.js";
import path from "path";
import staticRoute from "./routes/staticUrl.js";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

mongoDbConnection("mongodb://127.0.0.1:27017/url-shortner")
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(`err : ${err}`));

app.use("/url", route);
app.use("/", staticRoute);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
