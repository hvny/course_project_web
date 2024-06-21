import { AxiosError } from "axios";
import api from "../api";

export async function getItems() {
    try {
        const response = await api.get("/items");
        const data = response.data;
        return data;
  
    } catch (e) {
        const error = e as AxiosError;
        return error;
    }
}