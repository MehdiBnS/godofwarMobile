import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const [visible, setVisible] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 1000);

    return () => clearInterval(interval);
  }, []);



 

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/kratosbackground.jpg')} resizeMode="cover" style={styles.backgroundImage}>
        <View style={styles.logoBox}>
          <Image style={{ height: 100, width: 400 }} source={require('../assets/logo.png')} />
        </View>

        <View style={styles.continueBox}>
          <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
            <Text
              style={[
                styles.text,
                { opacity: visible ? 1 : 0 },
              ]}
            >
              Appuyer ici pour continuer...
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logoBox: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 100,
    left: 0,
  },
  continueBox: {
    width: 400,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    position: 'absolute',
    bottom: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default HomeScreen;
