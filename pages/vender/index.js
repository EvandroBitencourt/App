import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, TextInput, useState } from 'react-native'
import { Text, Button } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import api from "../../service";

export class Vender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          placa: '',
          km: '',
          versao: '',
          cambio: '',
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
                    onChangeText={text => this.setState({ placa: text.replace("-", "") })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Digite a Quilimetragem"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => this.setState({ km: text })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Digite a Versão"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => this.setState({ versao: text })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />

                <Picker
                selectedValue={this.state.cambio}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({ cambio: itemValue})
                }>
                <Picker.Item label="Selecione tipo de Cambio" value="" />
                <Picker.Item label="Manual" value="Manual" />
                <Picker.Item label="Automático" value="Automático" />
                <Picker.Item label="Automatizado" value="Automatizado" />
                </Picker>

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
                
        
                <View style={styles.button}>
                    <Button title="Vender já" buttonStyle={{ backgroundColor: '#0bbcc9'}} onPress={() => {}} />
                </View>
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