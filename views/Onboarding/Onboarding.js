import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Welcome from './Welcome';
import Intro from './Intro';
import Location from './Location';
import Notifications from './Notifications';
import Login from './Login';

const Onboarding = ({ navigateToNext = () => {} }) => {
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const navigateToNextPage = () => (activeViewIndex < 3 ? setActiveViewIndex(activeViewIndex + 1) : navigateToNext());
  const navigateToPrevious = activeViewIndex > 0 ? () => setActiveViewIndex(activeViewIndex - 1) : undefined;

  return (
    <View style={styles.container}>
      {/* Render active view and pass functions for navigation */}
      {activeViewIndex === 0 ? <Welcome navigateToNext={navigateToNextPage} navigateToPrevious={navigateToPrevious} /> : null}
      {activeViewIndex === 1 ? <Intro navigateToNext={navigateToNextPage} navigateToPrevious={navigateToPrevious} /> : null}
      {activeViewIndex === 2 ? <Location navigateToNext={navigateToNextPage} navigateToPrevious={navigateToPrevious} /> : null}
      {activeViewIndex === 3 ? <Notifications navigateToNext={navigateToNextPage} navigateToPrevious={navigateToPrevious} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Onboarding;
