import { AxiosError } from 'axios';
import {register, authorize} from "./api/auth/auth.ts";


export async function registration(userData) {
    console.log("registration: ", userData);
    const res = await register(userData);

    if (res instanceof AxiosError) {
        return { error: res.response?.data.message };
    } else {
        const userLoginData = {phoneNumber: userData.phoneNumber, password: userData.password}
        console.log("userLoginData: ", userLoginData)
        await login(userLoginData);
        return { user: res };
    }
}

export async function login(userData) {
    console.log("login: ", userData);

    const res = await authorize(userData);
    if (res instanceof AxiosError) {
        return { error: res.response?.data.message };
    }
    else {
        console.log(res);
        localStorage.setItem("token", res.accessToken);
        return { token: res.accessToken };
    }
}