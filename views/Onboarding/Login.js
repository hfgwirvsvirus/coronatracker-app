import React, {
  useState,
} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
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
    padding: 30,
    fontSize: 14,
  },
  scanner: {
    height: 300,
    width: 300,
    marginBottom: 20,
  },
  button: {
    width: '100%',
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
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    width: '100%',
  },
  paragraphTracking: {
    textAlign: 'center',
    marginTop: 20,
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
});

const Login = ({ navigateToNext = () => {} }) => {
  StatusBar.setBarStyle('dark-content', true);

  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const setLogin = () => {
    const hasInput = mail.length > 0 && pass.length > 0;
    const correctMail = validateEmail(mail);
    if (hasInput && correctMail) {
      Alert.alert(`Die Mail ${mail} mit dem Passwort ${pass} wurde registriert!`);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.headlineBig}>Willkommen bei revealVirus</Text>
          <TextInput
            style={styles.textInput}
            name="mail"
            onChangeText={(value) => {
              setMail(value);
            }}
            value={mail}
            placeholder="E-Mail"
            keyboardType="email-address"
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            name="pass"
            onChangeText={(value) => {
              setPass(value);
            }}
            value={pass}
            placeholder="Passwort"
          />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={() => setLogin(true)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToNext}>
            <Text style={styles.paragraphTracking}>Account erstellen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
