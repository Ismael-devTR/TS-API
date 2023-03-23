import { NewDiary } from "./types";
import { Visibility, Weather } from "./enums"

const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) {
        throw new Error("Incorrect or missing comment")
    }
    return commentFromRequest
}


const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error("Incorrect or missing date")
    }
    return dateFromRequest
}


const parseWeather = (weatherFromRequest: any): Weather => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error("Incorrect or missing Weather")
    }
    return weatherFromRequest
}

const parseVsibility = (visibilityFromRequest: any): Visibility => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error("Incorrect or missing visivility")
    }
    return visibilityFromRequest
}




/**
 * 
 * VALITATION FUNCTIONS
 * 
 */

const isString = (string: string): boolean => {
    return typeof string === "string"
}
const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}
const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param)
}
const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param)
}


const toNewDiaryEntry = (object: any): NewDiary => {
    const newEntry: NewDiary = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVsibility(object.visibility)
    }

    return newEntry
}


export default toNewDiaryEntry;