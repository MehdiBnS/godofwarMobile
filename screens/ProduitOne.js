import React from 'react';
import { View, Text, Image, TouchableOpacity, Share, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Games } from '../data/database';

const ProduitOne = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { gameId } = route.params;
    
    const game = Games.filter(g => g.id === gameId)[0];

    const onShare = () => {
        Share.share({
            message: `J'ai adoré jouer à : ${game.title} - ${game.genre} ${game.stars} ${game.rating}`,
        });
    };

    if (!game) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Jeu non trouvé</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/croix.png')} style={styles.closeIcon} />
            </TouchableOpacity>
            <Image source={game.image} style={styles.image} />
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.genre}>{game.genre}</Text>
            <Text style={styles.rating}>{game.stars} {game.rating}</Text>
            <Text style={styles.release}>
                {game.sortie ? 'Disponible' : 'À venir'}
            </Text>
            <TouchableOpacity style={styles.button} onPress={onShare}>
                <Text style={styles.buttonText}>Partager</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    genre: {
        color: 'white',
        fontSize: 18,
        marginTop: 10,
    },
    rating: {
        color: 'white',
        fontSize: 18,
        marginTop: 10,
    },
    release: {
        color: '#FF6347',
        fontSize: 18,
        marginTop: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#FF6347',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    closeButton: {
        position: 'absolute',
        top:50,
        right: 20,
        zIndex: 1,
    },
    closeIcon: {
        width: 30,
        height: 30,
        tintColor: '#FF6347',
    },
    errorText: {
        color: 'white',
        fontSize: 18,
    }
});

export default ProduitOne;
