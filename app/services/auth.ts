import {Api} from "./api";
import {ApiResponse} from "./api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {UserModel} from "../models";

export async function signIn(email: string, password: string): Promise<ApiResponse<UserModel>> {
    const res = await Api.builder()
        .usePost()
        .useUrl("/v1/users/token")
        .useValues({
            username: email,
            password,
        })
        .useHeader("Content-Type", "application/x-www-form-urlencoded")
        .useBody(`username=${email}&password=${password}`)
        .fecth().then(
            res => {
                // stores token on async storage
                console.log('Resposta', res)
                AsyncStorage.setItem("token", JSON.stringify(res.body));
                return res;
            }
        ).then(
            () => Api.builder()
                .useGet()
                .useUrl("/v1/users/email/" + email)
                .stringifyBody()
                .useDefaultHeaders()
                .fecth()
        ).then(
            res => {
                // stores user on async storage
                AsyncStorage.setItem("user", JSON.stringify(res.body));
                return res;
            }
        )

    return res;
}

export async function signUp(
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    phone: string
): Promise<ApiResponse<{}>> {
    if (password != confirmPassword) {
        return Promise.resolve({
            message: "As senhas não coincidem",
            status_code: 404,
            body: {},
        });
    }

    const user = {
        name,
        email,
        password,
        phone,
        experience: "asd",
        profile: "asd",
    };

    return await Api.builder()
        .usePost()
        .useUrl("/v1/users/create/")
        .useValues(user)
        .stringifyBody()
        .useDefaultHeaders()
        .fecth<{}>();
}

export async function signOut() {
}

export default {
    signIn,
    signUp,
    signOut,
};
