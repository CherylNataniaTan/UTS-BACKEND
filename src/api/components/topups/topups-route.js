const express = require("express");
const router = express.Router();
const controller = require("./topups-controller");

router.get("/topups", controller.getAll);
router.get("/topups/:id", controller.getById);
router.post("/topups", controller.create);
router.patch("/topups/:id", controller.update);
router.delete("/topups/:id", controller.remove);

module.exports = router;