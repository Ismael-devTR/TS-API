import express from "express";

const router = express.Router();

router.get("/", (_req, _res) => {
  _res.send("Fetching all entry diaries");
});

router.post("/k", (_req, _res) => {
  _res.send("Saving a diary!");
});

export default router;
