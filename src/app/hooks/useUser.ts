import {UserModel} from "../models";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function useUser(): Promise<UserModel> {
    return JSON.parse(await AsyncStorage.getItem("user"));
}
