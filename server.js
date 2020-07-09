const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());




app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));

    var settings = {
      "url": "https://zoom.us/oauth/token?grant_type=authorization_code&code="+req.query.code+"&redirect_uri=https://whispering-shore-04651.herokuapp.com/",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Authorization": "Basic UnljYzZ0Q3FSSTZPSTFYZUR1dzJXZzpSN2N3NHlYR3M1dkFEb1pNTFNaakQySzZQbWlQbWpPQQ=="
      },
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      return res.json(response);
    });


    console.log(req.query.code);
    return res.json(req.query.code);
});

app.listen(port, function() {
  console.log(`App Server is listening on PORT: ${port}`);
});

