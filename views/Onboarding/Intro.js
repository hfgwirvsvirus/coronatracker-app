/* eslint-disable max-len */
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    margin: 20,
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
});

// eslint-disable-next-line react/prop-types
const Intro = ({ navigateToNext = () => {}, navigateToPrevious }) => (
  <View style={styles.container}>
    <View style={styles.containerText}>
      <Text style={styles.headlineSmall}>Worum geht es?</Text>
      <Text style={styles.paragraphText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</Text>
    </View>
    <View style={styles.containerButton}>
      <TouchableOpacity style={styles.button} onPress={navigateToNext}>
        <Text style={styles.buttonText}>Los gehts</Text>
      </TouchableOpacity>
      <Text style={styles.paragraphTracking}>Tracking Code</Text>
    </View>
  </View>
);

export default Intro;
