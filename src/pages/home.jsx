import React from "react";
import { Text, View, BackHandler, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';

export function Home() {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        })
    }, []) //Bloquear "voltar" Android

    return (
        <LinearGradient
            colors={['#38c172', '#000000']}
            style={styles.container}
            start={{ x: 2.5, y: 0 }}>

            <Text style={styles.title}>Bem Vindo </Text>
            <Text style={styles.subTitle}> O que deseja fazer?</Text>

            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.titleButtonLogin}> Fazer Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSignUp}>
                <Text style={styles.titleButtonSignUp}> Cadastrar-se </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.button}> Pular Login </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: '#37e57f',
        fontSize: 60,
        fontWeight: 'bold',
    },

    subTitle: {
        fontSize: 20,
        color: '#37e57f',
        marginBottom: 150,
        marginTop: 10,
        fontWeight: 'bold',
    },

    buttonLogin: {
        width: '40%',
        height: 50,
        backgroundColor: '#38c172',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 25,
        marginRight: 170,
    },

    titleButtonLogin: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
    },

    buttonSignUp: {
        width: '40%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#38c172',
        borderRadius: 30,
        marginTop: 50,
        marginLeft: 170,
        marginBottom: 40,
    },

    titleButtonSignUp: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
    },

    button: {
        color: '#FFF',
        marginTop: 100,
        fontSize: 13,
    },

});