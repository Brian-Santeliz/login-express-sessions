const express = require("express");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    //crear la parte de expiracion
  })
);

app.use("/sesion", require("./router/index"));

app.listen(3000, () => console.log("Servidor en el puerto"));
