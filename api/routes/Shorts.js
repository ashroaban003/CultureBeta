const express = require("express");
const {
  createShort,
  getShorts,
  likeShort,
  deleteShort,
} = require("../controllers/ShortsController.js");
const router = express.Router();

router.post("/", createShort);
router.get("/", getShorts);
router.put("/:id/like", likeShort);
router.delete("/:id", deleteShort);

module.exports = router;
