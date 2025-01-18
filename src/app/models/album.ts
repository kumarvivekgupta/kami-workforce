import { User } from "./user";

export interface Album {
    "userId": number,
    "id": number,
    "title": string,
    user?:User
}