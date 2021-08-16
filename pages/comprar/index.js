import React from 'react';
import {  SafeAreaView, ScrollView,View, Text, Image, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import { Card, Button, Icon, Badge } from 'react-native-elements';
import api from "../../service";
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Comprar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { carros: 0, click: 0, anuncio: [] };

        AsyncStorage.getItem('storage_token').then(res => {
            api.defaults.headers.common = {"Authorization" : `Bearer ${res}`}
            api.post("/api/auth/inicio")
            .then((response) => {
                this.setState({ 
                    carros: response.data.carrosanunciados,
                    click: response.data.clik,
                    anuncio: response.data.carros,
                });
                console.log(response.data.carros)
            })
            .catch((err) => {
                Alert.alert(
                    "Atenção!",
                    "Erro, Verificar Conexão com a Intenet e Tente novamente!",
                    [ { text: "OK" } ]
                  );
            });
        })
    }

    detalheCarro = (id) => {
        this.props.navigation.navigate('Detalhe');
        console.log(id);
    }

    render() {
        return (<>
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>

                <Badge value={<Text style={styles.badge2}>Carros Anunciados: {this.state.carros }</Text>} status="primary" badgeStyle={{ height: 40 }} />

                <Badge value={<Text style={styles.badge2}>Clicks: {this.state.click}</Text>} status="success" badgeStyle={{ height: 40 }} />
            
            </View>
            {this.state.anuncio.map((res, key)=> {
                return (
                    <Card>
                        <Card.Title h3>{res.marca.toUpperCase()}</Card.Title>
                        <Card.Image source={{ uri: 'https://checkkm.com.br/storage/app/public/carros/' + res.principal }}  style={{ width: 200, height: 200  }} PlaceholderContent={<ActivityIndicator />}></Card.Image>
                        <Text style={{fontSize: 15}}>
                            MODELO: {res.modelo.toUpperCase()}
                        </Text>
                        <Text style={{fontSize: 15}}>
                            ANO/MODELO: {res.anomodelo}
                        </Text>
                        <Text style={{fontSize: 20, color: 'green'}}>
                            VALOR: R$ {res.preco}
                        </Text>
                        <Text style={{fontSize: 15,marginBottom: 5}}>
                            COR: {res.cor.toUpperCase()}
                        </Text>
                        <Button
                        icon={<Icon name='shopping-cart' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#32CD32'}}
                        title='DAR O LANCE' 
                        onPress={ () => this.detalheCarro(res.id) }/>
                    </Card>
                ) 
            })}

            {  this.state.anuncio ? <Text style={styles.anuncio}>Nenhum Carro Anunciado</Text> : null }
            
            </ScrollView>
        </SafeAreaView>
        </>);
    }
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 15,
      margin: 10,
    },
    badge2: {
        padding: 10,
        fontSize: 15,
        color: '#fff' 
    },
    anuncio: {
        fontSize: 20,
        textAlign: 'center'
    }
  });