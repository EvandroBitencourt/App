import React from 'react';
import { ScrollView,View, Text, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import { Card, Button, Icon, Badge } from 'react-native-elements';
import api from "../../service";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CountDown from 'react-native-countdown-component';

export class Comprar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { carros: 0, click: 0, anuncio: [], lance: 0 };

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
            api.defaults.headers.common = {"Authorization" : `Bearer ${res}`}
            api.post("/api/auth/verificalance")
            .then((response) => {
                this.setState({lance: response.data.length});
            }).catch((err) => { 
                
            });
        })
    }

    detalheCarro = (carro) => {
        this.props.navigation.navigate('Detalhe', { carro: carro });
    }

    numberFormat = (value) => {
        return 'R$ ' + value.replace('.',',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    tiraTempo = (tempo) => {
        var array = tempo.split(':');
        let hora = parseInt(array[0]) * 3600;
        let minuto = parseInt(array[1]) * 60;
        let segundo = parseInt(array[2]);

        return  hora + minuto + segundo;
    }

    render() {
        return (<>
        
            <ScrollView>
            <View style={styles.container}>

                {this.state.lance > 0 ? <Badge value={<Text style={styles.badge2}>Você Recebeu {this.state.lance } Lances</Text>} status="primary" badgeStyle={{ height: 40 }} />: null}
                
                <Badge value={<Text style={styles.badge2}>Meus Clicks: {this.state.click}</Text>} status="success" badgeStyle={{ height: 40 }} />
            
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
                            VALOR: { this.numberFormat(res.preco)}
                        </Text>
                        <Text style={{fontSize: 15,marginBottom: 5}}>
                            COR: {res.cor.toUpperCase()}
                        </Text>
                        <Button
                        icon={<Icon name='shopping-cart' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#32CD32'}}
                        title='DAR O LANCE' 
                        onPress={ () => this.detalheCarro(res) }/>
                        <Text style={{fontSize: 18,marginTop: 4}}>
                            Essa oferta expira em: <CountDown
                                                    until={this.tiraTempo(res.tempo)}
                                                    size={13}
                                                    digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
                                                    digitTxtStyle={{color: '#1CC625'}}
                                                    timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                                                    separatorStyle={{color: '#1CC625'}}
                                                    timeToShow={['H', 'M', 'S']}
                                                    timeLabels={{m: null, s: null}}
                                                />
                        </Text>
                    </Card>
                ) 
            })}

            {  this.state.anuncio.length == 0 ? <Text style={styles.anuncio}>Nenhum Carro Anunciado</Text> : null }
            
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