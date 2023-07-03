import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Lottie from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";

export function Splash() {
    const navigation = useNavigation()
    return (
        <View style={styles.splash}>
            <Lottie source={require('../assets/splash.json')}
                autoPlay
                loop={false}
                autoSize
                speed={0.5}
                onAnimationFinish={() => navigation.navigate('Home')}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    splash: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})