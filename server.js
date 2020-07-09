const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

let code;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    code = req.query.code
    //console.log(req.query.code);
    //return res.json(req.query.code);
});

app.get("/code", function(req, res) {
    return res.json(code);
})

app.listen(port, function() {
  console.log(`App Server is listening on PORT: ${port}`);
});

