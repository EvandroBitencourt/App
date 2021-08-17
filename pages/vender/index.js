import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, TextInput } from 'react-native'
import { Text, Button } from 'react-native-elements';
import api from "../../service";

export class Vender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 2
        };
      }
    render() {
        return (<>

        <SafeAreaView >
            <ScrollView style={styles.view}>

                <Text style={styles.text}>Anunciar o Veiculo</Text>

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Digite a Placa"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    //onChangeText={text => this.setState({ placa: text.replace("-", "") })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Digite a Quilimetragem"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    //onChangeText={text => this.setState({ placa: text.replace("-", "") })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Digite a Versão"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    //onChangeText={text => this.setState({ placa: text.replace("-", "") })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Selecione  Cambio"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    //onChangeText={text => this.setState({ placa: text.replace("-", "") })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />
                
        

            </ScrollView>
        </SafeAreaView>
    
        </>);
    }
    
}
const styles = StyleSheet.create({
    view: {
       marginTop: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 30
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
 })