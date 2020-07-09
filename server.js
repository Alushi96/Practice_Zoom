const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    console.log(req.query.code);
    return res.json(req.query.code);
});

app.get("/?:id", function(req,res) {
  console.log("req");
  console.log(req.params);
  return res.json(req.params);
})

app.listen(port, function() {
  console.log(`App Server is listening on PORT: ${port}`);
});

