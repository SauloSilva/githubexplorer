import React from 'react';

import {
  View,
  Text,
  TextInput, 
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import styles from './styles';

const Welcome = () => (
  <View style={styles.container}>
    <StatusBar barStyle='light-content' />

    <Text style={styles.title}>Bem-vindo</Text>
    <Text style={styles.text}>
      Para continuar, precisamos que você informe seu usuário no Github
    </Text>

    <View style={styles.form}>
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Digite seu usuário"
        underlineColorAndroid="rgba(0,0,0,0)"
      />

      <TouchableOpacity style={styles.button} onPress={() => (false)}>
        <Text style={styles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  </View>
);

Welcome.navigationOptions = {
  header: null,
};

export default Welcome;
