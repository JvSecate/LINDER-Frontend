import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen, RegisterScreen} from "../screens";

const AuthStack = createNativeStackNavigator();

export const AuthRoutes = () => {
    return <AuthStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        {<AuthStack.Screen name="Login" component={LoginScreen}/>}
        {<AuthStack.Screen name="Register" component={RegisterScreen}/>}
    </AuthStack.Navigator>
}

export default AuthRoutes;
