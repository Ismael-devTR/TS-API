import { DiaryEntries, NewDiary, NonSensitiveDiaryEntry } from "../types";
import diaryData from "./diaries.json";

const diaries: Array<DiaryEntries> = diaryData as Array<DiaryEntries>;
export const getEntries = (): DiaryEntries[] => diaries;
export const findDiaryByiD = (id: number): NonSensitiveDiaryEntry | undefined => {
    const entry = diaries.find((d) => d.id === id);
    if (entry) {
        const { comment, ...restOfDiary } = entry;
        return restOfDiary
    }
    return undefined
}
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return { id, date, weather, visibility }
    })
};
export const addEntry = (newDiary: NewDiary): DiaryEntries => {
    const newdiaryEntry = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiary
    }

    diaries.push(newdiaryEntry)
    return newdiaryEntry
};
