import axios from "axios";
export const url='https://'

export const httpClient = axios.create({ baseURL: url });
