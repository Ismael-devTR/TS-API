import { Visibility, Weather } from "./enums"
export interface DiaryEntries {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type NonSensitiveDiaryEntry = Omit<DiaryEntries, "comment">
export type NewDiary = Omit<DiaryEntries, "id">