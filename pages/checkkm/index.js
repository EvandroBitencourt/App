import React from 'react';
import { Text, Button } from 'react-native-elements';
import { StyleSheet, TextInput, KeyboardAvoidingView, View } from 'react-native';

export class Checkkm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { placa: '' };
    }

    buscaPlaca() {
        console.log(this.state.placa);
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
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => this.setState({ placa: text})}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />

                <Button
                    buttonStyle={{borderRadius: 0, marginLeft: 30, marginRight: 30, marginBottom: 0, backgroundColor: '#32CD32'}}
                    title='Check KM' 
                    onPress={() => this.buscaPlaca() }
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
        padding: 10
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1572aa'
      },
 })