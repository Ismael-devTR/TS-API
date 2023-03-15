export type Weather = "sunny" | `rainy` | "cloudy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DiaryEntries {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}
