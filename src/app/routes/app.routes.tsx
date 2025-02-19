import {Bell, Home, ShoppingBag, User} from "@tamagui/lucide-icons";
import {JobsScreen, PerfilScreen} from "../screens";
import React from "react";
import {SizableText, YStack} from "tamagui";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NotificationScreen} from "../screens/notications";
import {MyJobScreen} from "../screens/myjob";

const TabStack = createBottomTabNavigator();

const screenOptions: any = {
    headerShown: false,
    tabBarShowLabel: false,
    backgroundColor: "transparent",
    tabBarStyle: {
        position: "absolute",
        backgroundColor: "#111",
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 75,
        zIndex: 100,
        borderTopWidth: 0,
        borderTopColor: "transparent",
    },
};

type TabBarIconProps = {
    focused: boolean;
    icon: React.ReactNode;
    name: string;
};

const TabBarIcon = ({focused, icon, name}: TabBarIconProps) => {
    return (
        <YStack
            ai={"center"}
            jc={"center"}
            p="$3"
            borderRadius="$2"
        >
            {icon}
            <SizableText size="$1">{name}</SizableText>
        </YStack>
    );
};

const TempMyJobs = () => <></>;

export const AppRoutes = () => {
    const screens = [
        {
            name: "Inicio",
            icon: {
                focusedColor: "white",
                fill: "white",
                component: Home,
            },
            component: JobsScreen,
        },
        {
            name: "Notificações",
            icon: {
                focusedColor: "white",
                fill: "white",
                component: Bell,
            },
            component: NotificationScreen,
        },
        {
            name: "Trabalhos",
            icon: {
                focusedColor: "white",
                fill: "white",
                component: ShoppingBag,
            },
            component: MyJobScreen,
        },
        {
            name: "Perfil",
            icon: {
                focusedColor: "white",
                fill: "white",
                component: User,
            },
            component: PerfilScreen,
        },
    ];

    return (
        <TabStack.Navigator
            screenOptions={screenOptions}
            initialRouteName={"Trabalhos"}
        >
            {screens.map(({name, component, icon}) => (
                <TabStack.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <TabBarIcon
                                focused={focused}
                                icon={
                                    <icon.component
                                        size={22}
                                        color={focused ? icon.focusedColor : icon.fill}
                                    />
                                }
                                name={name}
                            />
                        ),
                    }}
                />
            ))}
        </TabStack.Navigator>
    );
};

export default AppRoutes;
