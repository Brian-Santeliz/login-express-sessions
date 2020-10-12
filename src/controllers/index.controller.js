exports.loginControllerGet = (req, res) => {
  res.render("login");
};
exports.logoutController = (req, res) => {
  req.session.destroy();
  res.redirect("/sesion/");
};

exports.adminController = (req, res) => {
  if (!req.session.admin) {
    return res.redirect("/sesion/");
  }
  res.render("admin");
};
exports.loginControllerPost = (req, res) => {
  const { nombre, correo } = req.body;
  if (nombre === "admin" && correo === "admin@mail.com") {
    req.session.admin = true;
    res.redirect("/sesion/admin");
    return;
  }
  return res.render("login", {
    msg: "Credenciales no validad",
  });
};
