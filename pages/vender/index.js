import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native'
import { Input, Text, Button } from 'react-native-elements';
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
                <Input 
                placeholder='Placa do carro' 
                //onChangeText={() => this.setState({ count: this.state.count + 1 })}
                />
                <Text>You clicked {this.state.count} times</Text>
                
        

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
     }
 })