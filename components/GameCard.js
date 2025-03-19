import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GameCard({ game }) {
    const navigation = useNavigation();


    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('ProduitOne', { gameId: game.id })}>
                <Image source={game.image} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.text}>{game.title}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>{game.genre}</Text>
            </TouchableOpacity>
            <Text style={styles.textButton}>{game.stars} {game.rating}</Text>
            <Text style={styles.productRelease}>
                {game.sortie ? 'Disponible' : 'À venir'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 350,
        backgroundColor: '#1A1A1A',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#4D3B72',
        borderRadius: 50,
        padding: 5,
        marginTop: 10,
    },
    textButton: {
        color: 'white',
        fontSize: 14,
    },
    productRelease: {
        color: '#FF6347',
        fontSize: 16,
        marginTop: 5,
    },
});
