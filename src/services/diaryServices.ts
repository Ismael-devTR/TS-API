import { DiaryEntries } from "../types";
import diaryData from "./diaries.json";

const diaries: Array<DiaryEntries> = diaryData as Array<DiaryEntries>;
export const getEntries = () => diaries;
export const addEntry = () => null;
