    import React from 'react';
    import { StyleSheet, SafeAreaView, ScrollView, View, Dimensions, TextInput, Alert } from 'react-native'
    import { Text, Button, Image, Badge } from 'react-native-elements';
    import api from "../../service";
    import AsyncStorage from '@react-native-async-storage/async-storage';
    import Carousel from 'react-native-snap-carousel';
    import { scrollInterpolator, animatedStyles } from './animations';
    import CurrencyInput from 'react-native-currency-input';

    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

    let DATA = [];
    
    export default function Detalhe({ navigation, route }) {
     

        React.useEffect(() => {
            DATA = [];
            if(route.params?.carro.principal != null){    
                DATA.push(route.params?.carro.principal)
            }
            if(route.params?.carro.adicional01 != null){
                 DATA.push(route.params?.carro.adicional01)
            }
            if(route.params?.carro.adicional02 != null){
                DATA.push(route.params?.carro.adicional02)
           }
           if(route.params?.carro.adicional03 != null){
            DATA.push(route.params?.carro.adicional03)
           }
           if(route.params?.carro.adicional04 != null){
            DATA.push(route.params?.carro.adicional04)
           }
           if(route.params?.carro.adicional05 != null){
            DATA.push(route.params?.carro.adicional05)
           }
            
            let carro = [];
            carro.push(route.params?.carro)
            setCarro(carro);

            _renderItem = _renderItem.bind(this)
          }, [route.params?.carro]);
    
        const [carro, setCarro] = React.useState([]);
        const [valor, setValor] = React.useState(0);
        const [index, setIndex] = React.useState(0);
        const [loading, setLoading] = React.useState(false);

        const fazerLance = (id) => {
            setLoading(true);
            AsyncStorage.getItem('storage_token').then(res => {
                api.defaults.headers.common = {"Authorization" : `Bearer ${res}`}
                api.post("/api/auth/lanceapi" ,{ obs: valor, id: id, api: true})
                  .then((response) => {
                    Alert.alert(
                        "Atenção!",
                        response.data.msg,
                        [ { text: "OK" } ]
                      );
                      setLoading(false);
                      navigation.goBack();
                  }).catch((err) => { 
                    Alert.alert(
                        "Atenção!",
                        "Placa do Carro incorreta",
                        [ { text: "OK" } ]
                      );
                      
                      setLoading(false);
                    });
            }) 
        }
        
        _renderItem = ({ item }) => {
            return (
                <Image
                source={{ uri: 'https://checkkm.com.br/storage/app/public/carros/' + item}}
                style={styles.itemContainer}
                 />
            );
          }
        
        return (<>
        <SafeAreaView>
            <ScrollView>
                <View style={styles.view}>
                    <Text style={styles.texto}> Fotos do Veiculo </Text>
                    
                    <Carousel
                    data={DATA}
                    renderItem={_renderItem} 
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    containerCustomStyle={styles.carouselContainer}
                    inactiveSlideShift={0}
                    onSnapToItem={(index) => setIndex({ index })}
                    scrollInterpolator={scrollInterpolator}
                    slideInterpolatedStyle={animatedStyles}
                    useScrollView={true}          
                    />
    
                </View>
                <View style={styles.view}>
                    <Text style={styles.texto}> Especificações do Veiculo </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        MARCA: {carro[0]?.marca.toUpperCase()}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        MODELO: {carro[0]?.modelo.toUpperCase()}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        ANO/MODELO: {carro[0]?.anomodelo}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        VERSÃO: {carro[0]?.versao.toUpperCase()}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        CÂMBIO: {carro[0]?.cambio.toUpperCase()}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        COMBUSTÍVEL: {carro[0]?.combustivel.toUpperCase()}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        TIPO DE DIREÇÃO: {carro[0]?.direcao.toUpperCase()}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        MOTORIZAÇÃO: {carro[0]?.motor}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        KM: {carro[0]?.km}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        QUANTIDADES DE PORTAS: {carro[0]?.portas}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        FINAL DA PLACA: {carro[0]?.finalplaca}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        COR: {carro[0]?.cor.toUpperCase()}
                    </Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.texto}> Acessórios do Veiculo </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        AIR BAG: {carro[0]?.airbag == 0 ? <Badge value="NÃO TEM" status="error"/> : <Badge value="TEM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        AR CONDICIONADO: {carro[0]?.arcondicionado == 0 ? <Badge value="NÃO TEM" status="error"/> : <Badge value="TEM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        VIDRO ELETRICO: {carro[0]?.vidroeletrico == 0 ? <Badge value="NÃO TEM" status="error"/> : <Badge value="TEM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        SENSOR DE RÉ: {carro[0]?.sensorre == 0 ? <Badge value="NÃO TEM" status="error"/> : <Badge value="TEM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        BLINDADO: {carro[0]?.blindado == 0 ? <Badge value="NÃO TEM" status="error"/> : <Badge value="TEM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        FINANCIADO: {carro[0]?.financiado == 0 ? <Badge value="NÃO" status="error"/> : <Badge value="SIM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        MULTAS: {carro[0]?.multas == 0 ? <Badge value="NÃO TEM" status="error"/> : <Badge value="TEM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        UNICO DONO: {carro[0]?.unicodono == 0 ? <Badge value="NÃO TEM" status="error"/> : <Badge value="TEM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        ALARME: {carro[0]?.alarme == 0 ? <Badge value="NÃO TEM" status="error"/> : <Badge value="TEM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        TRAVA ELETRICA: {carro[0]?.travaeletrica == 0 ? <Badge value="NÃO TEM" status="error"/> : <Badge value="TEM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        SOM: {carro[0]?.som == 0 ? <Badge value="NÃO TEM" status="error"/> : <Badge value="TEM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        CAMERA DE RÉ: {carro[0]?.camerare == 0 ? <Badge value="NÃO TEM" status="error"/> : <Badge value="TEM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        ACEITA TROCAS: {carro[0]?.aceitatrocas == 0 ? <Badge value="NÃO" status="error"/> : <Badge value="SIM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        IPVA ATRASO: {carro[0]?.ipva == 0 ? <Badge value="NÃO" status="error"/> : <Badge value="SIM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 15, marginLeft: 10}}>
                        CARRO DE LEILÃO: {carro[0]?.leilao == 0 ? <Badge value="NÃO" status="error"/> : <Badge value="SIM" status="success"/>}
                    </Text>
                    <Text style={{fontSize: 30, textAlign: 'center',marginTop: 10, color: 'green'}}>
                        VALOR: R$ {carro[0]?.preco.replace('.',',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') }
                    </Text>

                    <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 15 }}>Informe o Valor do lance</Text>

                    <CurrencyInput
                        style={[styles.input, {marginLeft:20, marginRight:20 , marginTop: 5, marginBottom: 20, elevation: 3 }] }
                        value={valor}
                        //onChangeValue={setValor}
                        placeholder="Digite o Valor do Lance"
                        prefix="R$"
                        delimiter="."
                        separator=","
                        precision={2}
                        onChangeValue={(formattedValue) => {
                            setValor(formattedValue); // $2,310.46
                        }}
                    />
                </View>    
                <View style={styles.button}>
                    <Button loading={loading} title="Confirmar Lance" buttonStyle={{ backgroundColor: 'dodgerblue', marginLeft: 20, marginRight: 20}} onPress={() => fazerLance(carro[0]?.id) } />
                </View>
                <View style={styles.button}>
                    <Button title="Voltar" buttonStyle={{ backgroundColor: '#0bbcc9', marginLeft: 20, marginRight: 20}} onPress={() => navigation.goBack()} />
                </View>
            </ScrollView>
        </SafeAreaView>
        
        </>)
    }
    
    const styles = StyleSheet.create({
        view: {
           marginTop: 30
        },
        button:{
            marginTop: 10  ,
            marginBottom: 10
        },
        texto:{
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 20
        },
        conteudo: {
            marginBottom: 7
        },
        carouselContainer: {
            marginTop: 10
          },
          itemContainer: {
            width: ITEM_WIDTH,
            height: ITEM_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center'
          },
          itemLabel: {
            color: 'white',
            fontSize: 24
          },
          counter: {
            marginTop: 25,
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center'
          },
          input: {
            backgroundColor: '#FFF',
            width: '90%',
            marginBottom: 15,
            color: '#222',
            fontSize: 22,
            borderRadius: 7,
            padding: 10,
          }
     })