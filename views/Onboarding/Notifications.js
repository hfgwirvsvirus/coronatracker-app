/* eslint-disable max-len */
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
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
  paragraphText: {
    marginTop: 60,
    marginBottom: 40,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 16,
    textAlign: 'center',
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
  paragraphSmall: {
    textAlign: 'center',
    marginTop: 20,
    color: '#000',
  },
  image: {
    marginTop: 100,
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

async function requestNotification() {
  const permission = await Permissions.askAsync(
    Permissions.NOTIFICATIONS,
  );
  if (permission.granted === true) {
    return true;
  }
  return false;
}


// eslint-disable-next-line react/prop-types
const Notifications = ({ navigateToNext = () => {} }) => (
  <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Image resizeMode="center" style={styles.image} source={require('../../images/notification.png')} />
        <Text style={styles.paragraphText}>Wir möchten Infektionsketten unterbrechen und im Ernstfall schnell reagieren. Dazu würden wir Dir eine Push Nachricht schicken, sobald du Kontakt mit einer infizierten Person hattest.</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={async () => { if (await requestNotification()) { navigateToNext(); } }}>
          <Text style={styles.buttonText}>Benachrichtigungen erlauben</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToNext()}>
          <Text style={styles.paragraphSmall}>Überspringen</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default Notifications;
