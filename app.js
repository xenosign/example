const express = require("express");

const memberDB = require("./controllers/memberController");

const app = express();
const PORT = 7000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/member", async (req, res) => {
  const MEMBERS = await memberDB.getAllMember();
  res.render("member", { MEMBERS });
});

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번에서 실행 중입니다!`);
});
