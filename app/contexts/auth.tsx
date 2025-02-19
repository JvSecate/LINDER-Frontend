import React, {createContext, useState} from "react";
import auth from "../services/auth";
import {Spinner, YStack} from "tamagui";
import {UserModel} from "../models";

export type AuthContextData = {
    signed: boolean;
    token: string;
    user: UserModel | null;
    loading: boolean;
    signIn(email: string, password: string): Promise<void>;
    signOut(): Promise<void>;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    async function signIn(email: string, password: string) {
        return auth.signIn(email, password).then(res => setUser(res.body));
    }

    async function signOut() {
        return auth.signOut();
    }

    if (loading) {
        return (
            <YStack ai={"center"} jc={"center"} flex={1}>
                <Spinner size={"large"}/>
            </YStack>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                token: "",
                user,
                signIn,
                signOut,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
