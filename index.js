const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public/css"));

app.listen(8080, function () {
  console.log("app listening on port ");
});

app.get("/", (req, res) => {
  res.redirect("/99");
});

app.get("/:numOfBottles", (req, res) => {
  let numOfBottles = req.params.numOfBottles || 99;
  let next = numOfBottles - 1;
  if (numOfBottles > 1) {
    res.send(
      numOfBottles +
        " bottles of beer on the wall" +
        " " +
        " Take 1 down and pass it around"
    );
  } else {
    res.send("1 bottle of beer onthe wall Let's Start Over</a>");
  }
});
