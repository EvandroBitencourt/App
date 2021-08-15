import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native'
import { Input, Text, Button } from 'react-native-elements';
import api from "../../service";

export class Detalhe extends React.Component {
    constructor(props) {
        super(props);
        
      }
    render() {
        return (<>

        <SafeAreaView >
            <ScrollView style={styles.view}>

                <Text style={styles.text}>Anunciar o Veiculo</Text>
                

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