import React from 'react';
import { ScrollView,View, Text, Alert, ActivityIndicator, StyleSheet } from 'react-native';
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
                
            })
            .catch((err) => {
                Alert.alert(
                    "Atenção!",
                    "Erro, Verificar Conexão com a Intenet e Tente novamente!",
                    [ { text: "OK", onPress: () => this.props.navigation.navigate('Login') } ]
                  );
            });
        })
    }

    detalheCarro = (carro) => {
        this.props.navigation.navigate('Detalhe', { carro: carro });
    }

    render() {
        return (<>
        
            <ScrollView>
            <View style={styles.container}>

                <Badge value={<Text style={styles.badge2}>Carros Anunciados: {this.state.carros }</Text>} status="primary" badgeStyle={{ height: 40 }} />

                <Badge value={<Text style={styles.badge2}>Clicks: {this.state.click}</Text>} status="success" badgeStyle={{ height: 40 }} />
            
            </View>
            {this.state.anuncio.map((res, i)=> {
                return (
                    <Card key={i}>
                        <Card.Title h3>{res.marca.toUpperCase()}</Card.Title>
                        <View style={styles.container}>
                        <Card.Image source={{ uri: 'https://checkkm.com.br/storage/app/public/carros/' + res.principal }}  style={{ width: 250, height: 200 }} PlaceholderContent={<ActivityIndicator />}></Card.Image>
                        </View>
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
                        onPress={ () => this.detalheCarro(res) }/>
                        <Text style={{fontSize: 19,marginTop: 5}}>
                            Essa oferta expira em: {(res) => { return res.tempo}}
                        </Text>
                    </Card>
                ) 
            })}

            {  this.state.anuncio ? <Text style={styles.anuncio}>Nenhum Carro Anunciado</Text> : null }
            
            </ScrollView>
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
    },
    
  });