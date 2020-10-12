const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("login");
});
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/sesion/");
});
router.get("/admin", (req, res) => {
  if (!req.session.admin) {
    return res.redirect("/sesion/");
  }
  res.render("admin");
});
router.post("/login", (req, res) => {
  const { nombre, correo } = req.body;
  if (nombre === "admin" && correo === "admin@mail.com") {
    req.session.admin = true;
    res.redirect("/sesion/admin");
    return;
  }
  return res.render("login", {
    msg: "Credenciales no validad",
  });
});

module.exports = router;
