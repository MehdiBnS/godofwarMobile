import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Principal = () => {
     const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/back1.jpg')} resizeMode='cover' style={styles.backgroundImage}>
                <View style={styles.menu}>
                    <View style={styles.logoBox}>
                        <Image style={styles.logo} source={require('../assets/logo.png')} />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game')}>
                        <Text style={styles.buttonText}>Jouer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Produit')}>
                        <Text style={styles.buttonText}>Voir les produits</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Info')}>
                        <Text style={styles.buttonText}>Informations</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    menu: {
        backgroundColor: '#263248',
        height: 400,
        width: 300,
        justifyContent: 'center',
        gap: 30,
        borderRadius: 15,
        padding: 20,
    },
    button: {
        backgroundColor: '#B87333',
        padding: 15,
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    logoBox: {
        width: '100%',
        alignItems: 'center',
        
    },
    logo: {
        width: 200,
        height: 50,
        resizeMode: 'contain',
    },
});

export default Principal;
