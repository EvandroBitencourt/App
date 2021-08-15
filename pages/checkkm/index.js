import React from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export class Checkkm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { placa: '' };
    }

    buscaPlaca = () => {
        console.log(this.state.placa);
    }

    render() {
        return (<>
            <Text style={styles.text}>
                Informe a Placa para Chegar
            </Text>

            <Input 
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
        </>);
    }
    
}
const styles = StyleSheet.create({
    text: {
       marginTop: 20,
       textAlign: 'center',
       fontSize: 20
    }
 })