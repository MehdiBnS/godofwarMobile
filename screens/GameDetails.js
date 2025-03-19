import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const GameDetails = () => {
  const route = useRoute();
  const navigation = useNavigation(); // Récupérer l'objet navigation
  const { gameId } = route.params; // Récupérer l'ID du jeu passé dans la navigation
  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = '06b30e1e0322446493f15723c3dfc575'; // Votre clé API

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);
        const data = await response.json();
        setGameDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur:', error);
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  if (!gameDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Aucun détail trouvé pour ce jeu.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      
      {/* Bouton de fermeture */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()} // Retourner à l'écran précédent
      >
        <Image source={require('../assets/croix.png')} style={styles.closeIcon} />
      </TouchableOpacity>

      {/* Détails du jeu */}
      <Image source={{ uri: gameDetails.background_image }} style={styles.image} />
      <Text style={styles.title}>{gameDetails.name}</Text>
      <Text style={styles.genre}>
        Genres: {gameDetails.genres.map((genre) => genre.name).join(', ')}
      </Text>
      <Text style={styles.rating}>Rating: {gameDetails.rating}</Text>
      <Text style={styles.description}>{gameDetails.description_raw}</Text>
      <Text style={styles.releaseDate}>Release Date: {gameDetails.released}</Text>
      <Text style={styles.platforms}>
        Platforms: {gameDetails.platforms.map((platform) => platform.platform.name).join(', ')}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  genre: {
    fontSize: 18,
    color: 'gray',
    marginVertical: 5,
  },
  rating: {
    fontSize: 18,
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  releaseDate: {
    fontSize: 16,
    marginVertical: 5,
  },
  platforms: {
    fontSize: 16,
    marginVertical: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
  },
  // Styles pour le bouton de fermeture
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  closeIcon: {
    width: 30,
    height: 30,
    tintColor: '#FF6347',
  },
});

export default GameDetails;
