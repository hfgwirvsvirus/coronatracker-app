import React, { useState } from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CodeScanner } from '../../components';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
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
    flexDirection: 'column',
    width: '100%',
    padding: 30,
    marginBottom: 40,
  },
  headlineSmall: {
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  paragraphText: {
    padding: 30,
    fontSize: 14,
    textAlign: 'center',
    width: 350,
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 40,
  },
  button: {
    width: '100%',
    borderRadius: 6,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 100,
    paddingRight: 100,
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
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  paragraphTracking: {
    textAlign: 'center',
    marginTop: 20,
  },
  paragraphScanner: {
    textAlign: 'center',
    marginTop: 10,
    color: theme.color.green,
  },
});

// eslint-disable-next-line react/prop-types
const Intro = ({ navigateToNext = () => {} }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState(undefined);
  return isScanning
    ? <CodeScanner onScanned={(data) => { setIsScanning(false); setScannedData(data); navigateToNext(); }} />
    : (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Image resizeMode="cover" style={styles.image} source={require('../../images/infected.png')} />
          <Text style={styles.headlineSmall}>Worum geht es?</Text>
          <Text style={styles.paragraphText}>Kontakte speichern, um Infektionsketten besser nachvollziehen zu können</Text>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={navigateToNext}>
            <Text style={styles.buttonText}>Los geht's</Text>
          </TouchableOpacity>
          <Text style={styles.paragraphTracking}>Du hast bereits einen Tracking Code?</Text>
          <Text onPress={() => { setIsScanning(true); }} style={styles.paragraphScanner}>Hier Code eingeben und direkt los legen.</Text>
        </View>
      </View>
    );
};

export default Intro;
