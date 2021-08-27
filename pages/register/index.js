import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, TextInput, Alert } from 'react-native'
import { Text, Button } from 'react-native-elements';
import TextInputMask from 'react-native-text-input-mask';
import api from "../../service";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function register({ navigation}) {

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [celular, setCelular] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [senhac, setSenhac] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const registra = () =>{
        if(nome == '' || email == '' || celular == '' || senha == '' || senhac == ''){
            Alert.alert(
                "Atenção!",
                "Preencha todos as Informações",
                [ { text: "OK" } ]
              );
            return ;
        }
        if(senha != senhac){
            Alert.alert(
                "Atenção!",
                "As Senhas não estão iguais!",
                [ { text: "OK" } ]
              );
            return ;
        }
        setLoading(true);
        api.post("/api/register",{ name: nome, email: email, telefone: celular, password: senha})
        .then((response) => {

            api.post("/api/login",{ email: email, password: senha })
            .then((response) => {
                AsyncStorage.setItem('storage_token', response.data.access_token).then((e) => {
                setLoading(false);
                navigation.navigate('Tabs');
                }
                );
                
            })
            
        }).catch((err) => {
            setLoading(false);
            Alert.alert(
              "Atenção!",
              "Email já Cadastrado ou Senha tem que ser maior que 8 caracteres!",
              [ { text: "OK" } ]
            );

          });
        
        
    }

    return (<>
    <SafeAreaView>
        <ScrollView>
            <View style={styles.view}>
                <Text style={styles.texto}> Cadastre-se no Check KM</Text>
                
                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Digite seu Nome Completo"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => setNome(text)}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />
                
                
                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Digite seu Email"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => setEmail(text)}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />

                <TextInputMask 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Digite seu Celular"
                    keyboardType='numeric'
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={(formatted, extracted) => {
                        setCelular(formatted)
                      }}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                    mask={"([00]) [0] [0000] [0000]"}
                />

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Digite sua Senha"
                    secureTextEntry={true}
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => setSenha(text)}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Confirme sua Senha"
                    secureTextEntry={true}
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => setSenhac(text)}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />
                

            </View>

            <View style={styles.button}>
                <Button loading={loading} title="Cadastrar-se" buttonStyle={{ backgroundColor: '#0bbcc9'}} onPress={() => registra() } />
            </View>

            <View style={styles.button}>
                <Button title="Cancelar" buttonStyle={{ backgroundColor: '#0bbcc9'}} onPress={() => navigation.goBack()} />
            </View>
        </ScrollView>
    </SafeAreaView>
    
    </>)
}

const styles = StyleSheet.create({
    view: {
       marginTop: 50
    },
    button:{
        marginTop: 10,
        marginBottom: 10,
        marginLeft:20, 
        marginRight:20
    },
    texto:{
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    conteudo: {
        marginBottom: 7
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
      },
 })