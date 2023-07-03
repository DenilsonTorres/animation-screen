import React from "react";
import { Splash } from '../pages/splash'
import { Home } from '../pages/home'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator()

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ gestureEnabled: false }} //bloquear "voltar" IOS
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}