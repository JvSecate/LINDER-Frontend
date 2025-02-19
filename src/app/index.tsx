import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {AuthProvider} from "./contexts/auth";
import {Routes} from "./routes";

export default function App() {
    return <NavigationContainer independent={true}>
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    </NavigationContainer>
}
