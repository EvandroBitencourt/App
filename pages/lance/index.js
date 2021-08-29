import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native'
import { Text, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../service";

export default function lance({ navigation}) {
    const [lances, setLances] = React.useState([]);
    React.useEffect(() => {
        AsyncStorage.getItem('storage_token').then(res => {
            api.defaults.headers.common = {"Authorization" : `Bearer ${res}`}
            api.post("/api/auth/verificalance")
              .then((response) => {
                setLances(response.data)
              }).catch((err) => { 
                
              });
        }) 
    }, []);

    numberFormat = (value) => {
        return 'R$ ' + value.replace('.',',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    return (<>
    <SafeAreaView>
        <ScrollView>
        {  lances.length != 0 ? <Text style={styles.texto}> Lances recebidos nos ultimos 3 dias </Text>: null }
 
            {lances.map((res, i)=> {
                return (
                    <View  key={i} style={styles.view}>
                        <Text style={styles.conteudo}> CARRO: {res.marca}</Text>
                        <Text style={styles.conteudo}> MODELO: {res.modelo} </Text>
                        <Text style={styles.conteudo}> VERSÃO: {res.versao} </Text>
                        <Text style={styles.conteudo}> ANO/MODELO: {res.anomodelo}</Text>
                        <Text style={styles.conteudo}>VALOR ANUNCIADO: { numberFormat(res.preco)}</Text>
                        <Text style={styles.conteudo}>VALOR DO LANCE: {numberFormat(res.obs)}</Text>
                        <Text style={styles.conteudo}>CONTATO: {res.telefone}</Text>
                    </View> 
                ) 
            })}

            {  lances.length == 0 ? <Text style={styles.texto}>Nenhum Lance recebidos nos ultimos 3 dias</Text> : null }

            <View style={styles.button}>
                <Button title="Voltar" buttonStyle={{ backgroundColor: '#0bbcc9'}} onPress={() => navigation.goBack()} />
            </View>
        </ScrollView>
    </SafeAreaView>
    
    </>)
}

const styles = StyleSheet.create({
    view: {
       marginTop: 20
    },
    button:{
        marginTop: 20,
        marginBottom: 10,
        marginLeft:20, 
        marginRight:20
    },
    texto:{
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 50
    },
    conteudo: {
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 17
    },
    anuncio: {
        fontSize: 20,
        textAlign: 'center'
    },
 })