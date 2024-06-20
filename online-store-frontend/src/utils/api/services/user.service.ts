import { AxiosError } from "axios";
import api from "../api";
export async function getUserInfo(): Promise<AxiosError | any> {
    try {
        const response = await api.get("/user/get");
        const data = response.data;
        console.log("getUserInfo: ", data)
        return data;
  
    } catch (e) {
        const error = e as AxiosError;
        return error;
    }
  }