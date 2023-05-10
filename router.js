const { Router } = require("express");
const mainController = require("./controllers/mainController");

const router = Router();

router.get("/", mainController.renderHomePage);
router.get("/article/:id", mainController.renderOneArticle);
router.get("/categorie/:name", mainController.renderOneCategory);

module.exports = router;