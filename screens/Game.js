import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Modal, Animated, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Game = () => {
    const navigation = useNavigation();
    const [menuVisible, setMenuVisible] = useState(false);
    const [tapCount, setTapCount] = useState(0);
    const [kratosStage, setKratosStage] = useState(1);
    const [scaleAnim] = useState(new Animated.Value(1));

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleTap = () => {
        setTapCount(tapCount + 1);
        if (tapCount >= 30 && kratosStage < 4) {
            setKratosStage(kratosStage + 1);
            setTapCount(0)
        }
        zoomAnimation();
    };

    const zoomAnimation = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.2,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            })
        ]).start();
    };

    const resetGame = () => {
        setKratosStage(1);
        setTapCount(0);
        setMenuVisible(false);  
    };

    const kratosImages = [
        require('../assets/kratos1.png'),
        require('../assets/kratos2.png'),
        require('../assets/kratos3.png'),
        require('../assets/kratos4.png'),
    ];

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/backgame.png')} resizeMode='cover' style={styles.backgroundImage}>
                <View style={styles.pauseContainer}>
                    <TouchableOpacity onPress={toggleMenu}>
                        <Image source={require('../assets/pause.png')} style={styles.pause} />
                    </TouchableOpacity>
                </View>

                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={menuVisible}
                    onRequestClose={toggleMenu}
                >
                    <View style={styles.menuContainer}>
                        <View style={styles.menu}>
                            <Text style={styles.menuText}>Menu Pause</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Principal');
                                setMenuVisible(false);
                            }}>
                                <Text style={styles.menuOption}>Retour à l'accueil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleMenu}>
                                <Text style={styles.menuOption}>Continuer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={resetGame}>
                                <Text style={styles.menuOption}>Réessayer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View style={styles.tapContainer}>
                    <Text style={styles.score}>Score: {tapCount}</Text>
                    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                        <TouchableOpacity onPress={handleTap}>
                            <Image 
                                source={kratosImages[kratosStage - 1]} 
                                style={styles.kratosImage} 
                            />
                        </TouchableOpacity>
                    </Animated.View>
                </View>

                <StatusBar hidden={true} />
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
    pauseContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
    },
    pause: {
        height: 40,
        width: 60,
        tintColor: 'white',
        top:50
    },
    menuContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    menu: {
        backgroundColor: '#263248',
        padding: 30,
        borderRadius: 10,
        width: 250,
        alignItems: 'center',
    },
    menuText: {
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
    },
    menuOption: {
        color: 'goldenrod',
        fontSize: 18,
        marginBottom: 10,
    },
    tapContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    score: {
        color: 'white',
        fontSize: 24,
        marginBottom: 20,
    },
    kratosImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain', 
    },
});

export default Game;
