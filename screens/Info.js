import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Games } from '../data/database';
import { BlurView } from 'expo-blur';

const Info = () => {
    const navigation = useNavigation();

    const handlePress = (gameId) => {
        navigation.navigate('GameDetails', { gameId });
    };

    return (
        <View style={styles.container}>

            <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/settingback.jpg')}
                resizeMode="cover"
            >
                <BlurView intensity={50} style={styles.blur}>

                    <View style={styles.box}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                            <Image source={require('../assets/croix.png')} style={styles.closeIcon} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Liste des Jeux</Text>

                        <ScrollView contentContainerStyle={styles.buttonContainer}>
                            {Games.map((game) => (
                                <TouchableOpacity
                                    key={game.id}
                                    style={styles.button}
                                    onPress={() => handlePress(game.id)}
                                >
                                    <Text style={styles.buttonText}>{game.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </BlurView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    blur: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    box: {
        position: 'absolute',
        backgroundColor: '#263248',
        height: '80%',
        width: '90%',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#B87333',
        padding: 15,
        marginVertical: 10,
        width: '80%',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: 25,
        right: 20,
        zIndex: 1,
    },
    closeIcon: {
        width: 30,
        height: 30,
        tintColor: '#FF6347',
    },
});

export default Info;
