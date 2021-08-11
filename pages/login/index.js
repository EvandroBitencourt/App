import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, View, Text, Image, TextInput, TouchableOpacity, Animated, Keyboard, Alert } from 'react-native';
import api from "../../service";
import styles from './styles';

export default function Login({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    keyboardDidShowListener
      = Keyboard.addListener('keyboardDidShow', keyboardDidShow);

    keyboardDidHideListener
      = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    // Animações em paralelo
    Animated.parallel([
      // Fornece um modelo de física básico (efeito mola/estilingue)
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),

      // Anima um valor ao longo do tempo
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 95,
        duration: 100,
        useNativeDriver: false,
      }),

      Animated.timing(logo.y, {
        toValue: 105,
        duration: 100,
        useNativeDriver: false,
      })
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 170,
        duration: 100,
        useNativeDriver: false,
      }),

      Animated.timing(logo.y, {
        toValue: 195,
        duration: 100,
        useNativeDriver: false,
      })
    ]).start();
  };

  verificar = () => {
   if (email == '' || password == ''){
    Alert.alert(
      "Atenção!",
      "Digite o Email e a senha!",
      [
        { text: "OK" }
      ]
    );
    return '';
   }

   api.post("/api/login",{ email: email, password: password })
      .then((response) => navigation.navigate('Tabs'))
      .catch((err) => {
        console.log("ops! ocorreu um erro" + err);
      });

  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.containerLogo}>
          <Animated.Image
            style={{
              width: logo.x,
              height: logo.y
            }}
            source={require('../../assets/logo.png')}
          />
        </View>

        <Animated.View style={[
          styles.form,
          {
            opacity: opacity,
            transform: [
              {
                translateY: offset.y
              }
            ]
          }
        ]}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            onChangeText={(email) => setEmail(email)}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#000"
            //keyboardType="visible-password"
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />

          <TouchableOpacity style={styles.buttonSubmit} onPress={() => this.verificar()}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText}>Criar conta gratuita</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </>
  );
};