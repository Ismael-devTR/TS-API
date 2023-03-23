import express from "express";
import toNewDiaryEntry from "../utils"
import * as diaryServices from "../services/diaryServices";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, _res) => {
  const diary = diaryServices.findDiaryByiD(+req.params.id)
  return diary !== null ? _res.send(diary) : _res.sendStatus(404)
});

router.post("/", (req, res) => {
  try {
    const newDiary = toNewDiaryEntry(req.body);

    const newDiaryentry = diaryServices.addEntry(newDiary)

    res.json(newDiaryentry)

  } catch (e: any) {
    res.status(400).json(e.message)
  }


});

export default router;
