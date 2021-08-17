import React from 'react';
import { Text, Button } from 'react-native-elements';
import { StyleSheet, TextInput, KeyboardAvoidingView, View, Alert } from 'react-native';
import api from "../../service";


export class Checkkm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { placa: '', loading: false};
    }

    buscaPlaca = () => {
        if(this.state.placa == ''){
            Alert.alert(
                "Atenção!",
                "Placa não informada!",
                [ { text: "OK" } ]
              );
            return '';
        }
        this.setState({ loading: true});
        api.defaults.headers.common = {"Authorization" : 'f95a7b02-4559-4c3c-b125-d7b5624e9ed1'}
        api.get("https://api.wipsites.com.br/dados/placa/" + this.state.placa )
        .then((response) => {
            this.contaPlaca();
            this.setState({ loading: false});
            this.props.navigation.navigate('DetalheKm', { placa: response.data });
        }).catch((err) => {
            Alert.alert(
              "Atenção!",
              "Placa do Carro incorreta",
              [ { text: "OK" } ]
            );
            this.setState({ loading: false});
            this.contaPlaca();
          });
    }

    contaPlaca = () => {
        api.get("https://checkkm.com.br/contadormais")
        .then((response) => { }).catch((err) => { });
    }
  
    render() {
        return (<>
            <KeyboardAvoidingView>
                <Text style={styles.text}>
                    Informe a Placa para Chegar
                </Text>
                <View > 
                
                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:20, marginBottom: 20, elevation: 3 }] }
                    placeholder="Digite a Placa"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => this.setState({ placa: text.replace("-", "") })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />
                
                <Button
                    loading={this.state.loading}
                    buttonStyle={{borderRadius: 0, marginLeft: 30, marginRight: 30, marginBottom: 0, backgroundColor: '#32CD32'}}
                    title='Check KM' 
                    onPress={this.buscaPlaca}
                />
                </View>
            </KeyboardAvoidingView>
        </>);
    }
    
}
const styles = StyleSheet.create({
    text: {
       marginTop: 20,
       textAlign: 'center',
       fontSize: 20
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 22,
        borderRadius: 7,
        padding: 10,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1572aa'
      },
 })