const { Router } = require("express");
const controllers = require("../controllers/index.controller");
const router = Router();

router.get("/", controllers.loginControllerGet);
router.get("/logout", controllers.logoutController);
router.get("/admin", controllers.adminController);
router.post("/login", controllers.loginControllerPost);

module.exports = router;
