import React, { useEffect } from 'react';
import {
  Image, StyleSheet, Text, View,
} from 'react-native';

const Welcome = ({ navigateToNext = () => {} }) => {
  useEffect(() => {
    setTimeout(() => {
      navigateToNext();
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image resizeMode="cover" style={styles.image} source={require('../../images/infected.png')} />
        <Text style={styles.subtitle}>GRETEL</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: 250,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default Welcome;
