import { AxiosError } from "axios";
import api from "../api";

export async function register(user: any): Promise<AxiosError | any> { 
    console.log("register: ", user);
    try {
        const response = await api.post("/auth/signup", user);
        const data = response.data;
        return data;

    } catch(e) {
        const error = e as AxiosError;
        return error;
    }
}

export async function authorize(user: any): Promise<AxiosError | any> { 
    try {
        const response = await api.post("/auth/signin", user);
        const data = response.data;
        return data;

    } catch(e) {
        const error = e as AxiosError;
        return error;
    }
}


//export default {register, authorize}