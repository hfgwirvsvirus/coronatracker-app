/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingBottom: 20,
    fontSize: 20,
  },
  scanner: {
    height: 300,
    width: 300,
    marginBottom: 20,
  },
  button: {},
});

export default function CodeScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(`Der Code ${type} mit den Daten ${data} wurde gescannt!`);
  };

  if (hasPermission === null) {
    return <Text>Bitte erlauben Sie die Kamera-Nutzung</Text>;
  }
  if (hasPermission === false) {
    return <Text>Die App kann auf die Kamera nicht zugreifen, bitte prüfen Sie die App-Berechtigungen</Text>;
  }

  return (
    <View style={styles.container}>
      {!scanned && (
        <Text style={styles.text}>Bitte den QR-Code scannen</Text>
      )}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      />
      {scanned && (
        <Button style={styles.button} title="Wiederholen" onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
