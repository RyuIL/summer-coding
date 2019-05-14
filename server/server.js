const express = require('express');
const path = require('path');
const os = require("os");
const connection = require("./db/mysql");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '..', 'public/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", require("./api/users"));
app.use("/db", require("./db/showAllData"));


// if you need api routes add them here
app.get("/api/getUsername", function(req, res, next){
    res.send({ username: os.userInfo().username });
});

app.listen(PORT, () => {
console.log(`Check out the app at http://localhost:${PORT}`);
});
