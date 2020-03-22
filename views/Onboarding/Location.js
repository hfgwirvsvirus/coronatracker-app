/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import * as ExpoLocation from 'expo-location';
import * as Permissions from 'expo-permissions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerText: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  containerButton: {
    flex: 0.25,
    width: '100%',
    padding: 30,
  },
  headlineSmall: {
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  headlineBig: {
    fontWeight: '600',
    paddingLeft: '20%',
    paddingRight: '20%',
    fontSize: 32,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginBottom: 40,
  },
  paragraphText: {
    marginTop: 60,
    marginBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 16,
    textAlign: 'center',
  },
  scanner: {
    height: 300,
    width: 300,
    marginBottom: 20,
  },
  button: {
    borderRadius: 6,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#00DC9A',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {
      width: 8,
      height: 20,
    },
  },
  buttonText: {
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  paragraphTracking: {
    textAlign: 'center',
    marginTop: 20,
  },
  paragraphSmall: {
    textAlign: 'center',
    marginTop: 20,
    color: '#000',
  },
  textInput: {
    fontWeight: '600',
    color: '#9098B1',
    alignSelf: 'stretch',
    height: 50,
    marginTop: 20,
    textAlign: 'left',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 6,
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default function Location({ navigateToNext = () => {} }) {
  const [error, setError] = useState(undefined);
  const [location, setLocation] = useState(false);

  // This tests the location permission and gets the current position.
  // Use this method to track the location in the background: https://docs.expo.io/versions/latest/sdk/location/#locationstartlocationupdatesasynctaskname-options
  const requestLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      return setError('Permission to access location was denied');
    }

    const currentPosition = await ExpoLocation.getCurrentPositionAsync({});
    setLocation(currentPosition);
    navigateToNext();
  };

  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setError('Oops, this will not work on Sketch in an Android emulator. Try it on your device!');
    }
  }, []);

  return (
    <View style={styles.container}>
      {!location && (
        <View style={styles.containerText}>
          <Image resizeMode="contain" style={styles.image} source={require('../../images/location.png')} />
          <Text style={styles.paragraphText}>Einige Funktionen sind ohne vollständigen Standortzugriff nicht verfügbar. Erlauben Sie den Standortzugriff, um die App in vollem Umfang nutzen können.</Text>
        </View>
      )}
      {!location && (
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => requestLocation()}>
          <Text style={styles.buttonText}>Standortzugriff erlauben</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToNext()}>
          <Text style={styles.paragraphSmall}>Überspringen</Text>
        </TouchableOpacity>
      </View>
      )}
    </View>
  );
}
