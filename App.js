import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Onboarding, Login, Profile } from './views';

export default function App() {
  // Here we should check whether the user has completed the Onboarding before.
  const [activeView, setActiveView] = useState('Onboarding');

  return (
    <View style={styles.container}>
      {activeView === 'Onboarding' ? <Onboarding navigateToNext={() => setActiveView('Login')} /> : null}
      {activeView === 'Login' ? <Login navigateToNext={() => setActiveView('Profile')} /> : null}
      {activeView === 'Profile' ? <Profile navigateToNext={() => setActiveView('Dashboard')} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
