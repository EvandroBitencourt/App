import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native'
import { Text, Button, ListItem } from 'react-native-elements';
import api from "../../service";

export default function lance({ navigation}) {

    const [modelo, setModelo] = React.useState([]);
    const [km, setKm] = React.useState([]);
    

    return (<>
    <SafeAreaView>
        <ScrollView>
            <View style={styles.view}>
                <Text style={styles.texto}> Cadastre-se </Text>
                

                

            </View>

            <View style={styles.button}>
                <Button title="Cadastrar-se" buttonStyle={{ backgroundColor: '#0bbcc9'}} onPress={() => navigation.goBack()} />
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
        marginTop: 20,
        marginBottom: 10
    },
    texto:{
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    conteudo: {
        marginBottom: 7
    }
 })