import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("flie find");
});

app.listen(4000, (): void => {
  console.log("connected succesfull");
});
