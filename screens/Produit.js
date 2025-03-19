import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Games } from '../data/database';
import GameCard from '../components/GameCard';

const Produit = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des Produits</Text>
            <SafeAreaView style={styles.safeAreaView}>
                <FlatList
                    data={Games}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <GameCard game={item} />}
                    contentContainerStyle={styles.flatList} />

                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('Principal')}
                >
                    <Text style={styles.backButtonText}>Retour à l'Accueil</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        top:40,
        marginBottom:50
    },
    safeAreaView: {
        flex: 1,
        justifyContent: 'space-between',  // Assure que l'espace est bien réparti
    },
    flatList: {
        paddingBottom: 20,
    },
    backButton: {
        marginTop: 20,
        backgroundColor: '#FF6347',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,  // Assure un petit espace au bas de l'écran
    },
    backButtonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default Produit;
