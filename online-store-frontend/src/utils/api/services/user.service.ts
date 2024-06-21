import { AxiosError } from "axios";
import api from "../api";

export async function getUserInfo() {
    try {
        const response = await api.get("/user/get");
        const data = response.data;
        return data;
  
    } catch (e) {
        const error = e as AxiosError;
        return error;
    }
}

export async function addAddress() {
    try {
        const response = await api.post("/user/addresses");
        const data = response.data;
        return data;
  
    } catch (e) {
        const error = e as AxiosError;
        return error;
    }
}

export async function editAddress(id) {
    try {
        const response = await api.put(`/user/addresses/${id}`);
        const data = response.data;
        return data;
  
    } catch (e) {
        const error = e as AxiosError;
        return error;
    }
}

export async function deleteAddress(id) {
    try {
        const response = await api.delete(`/user/addresses/${id}`);
        const data = response.data;
        return data;
  
    } catch (e) {
        const error = e as AxiosError;
        return error;
    }
}