const express = require("express");
const bodyParser = require("body-parser")

const userRoute = require("./routes/userRoutes") 

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
const port = 3000;

userRoute(app)

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.send("Hello World by Express");
});

app.listen(port, () => console.log(`API rodando na porta ${port}`));