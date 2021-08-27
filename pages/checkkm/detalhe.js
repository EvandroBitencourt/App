import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native'
import { Text, Button, ListItem } from 'react-native-elements';
import api from "../../service";
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';

//https://checkkm.com.br/km?placa=

export default function DetalheKm({ navigation, route }) {

    React.useEffect(() => {
        let carros = [];
        carros.push({ titulo: "Marca/Modelo", conteudo: route.params?.placa["dados_do_veiculo"].marca_modelo});
        carros.push({ titulo: "Ano", conteudo: route.params?.placa["dados_do_veiculo"].ano});
        carros.push({ titulo: "Chassi", conteudo: route.params?.placa["dados_do_veiculo"].chassi});
        carros.push({ titulo: "Combustível", conteudo: route.params?.placa["dados_do_veiculo"].combustivel});
        carros.push({ titulo: "Municipio", conteudo: route.params?.placa["dados_do_veiculo"].municipio});
        carros.push({ titulo: "Estado", conteudo: route.params?.placa["dados_do_veiculo"].uf});
        carros.push({ titulo: "Nº do Motor", conteudo: route.params?.placa["dados_do_veiculo"].n_motor});
        carros.push({ titulo: "Placa", conteudo: route.params?.placa["dados_do_veiculo"].placa});
        carros.push({ titulo: "Procedencia", conteudo: route.params?.placa["dados_do_veiculo"].procedencia});
        carros.push({ titulo: "Quantidade de passageiro", conteudo: route.params?.placa["dados_do_veiculo"].quantidade_passageiro});
        carros.push({ titulo: "Tipo de Veiculo", conteudo: route.params?.placa["dados_do_veiculo"].tipo_de_veiculo});
        carros.push({ titulo: "Tabela Fipe", conteudo: "R$ " + route.params?.placa["fipes"][0].valor.toFixed(2).replace('.',',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') });
        setModelo(carros);

        let km = [];
        api.get("https://checkkm.com.br/km?placa=" + route.params?.placa["dados_do_veiculo"].placa)
            .then((response) => {
                if(response.data[0] > 0){
                    km.push({conteudo: "Km " + response.data[0] + " Data: " + new Date(Date(response.data[1])).getDate() + "/" + new Date(Date(response.data[1])).getMonth() + "/" + new Date(Date(response.data[1])).getFullYear()  })
                    setKm(km)
                }
            }).catch((err) => { });

            
      }, [route.params?.placa]);

    const [modelo, setModelo] = React.useState([]);
    const [km, setKm] = React.useState([]);
    

    return (<>
    <SafeAreaView>
        <ScrollView>
            <View style={styles.view}>
                <Text style={styles.texto}> Informações do Veiculo </Text>
                

                {modelo.map((res, i)=> {
                return (
                    <View style={styles.conteudo}>
                        <ListItem key={i} Component={TouchableScale} friction={90} tension={100} activeScale={0.95}  linearGradientProps={{ colors: ['#0bbcc9', '#3025f4'], start: { x: 1, y: 0 },end: { x: 0.2, y: 0 }, }} ViewComponent={LinearGradient}>
                        <ListItem.Content>
                            <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
                            {res.titulo}
                            </ListItem.Title>
                            <ListItem.Subtitle style={{ color: 'white' }}>
                            {res.conteudo}
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron color="white" />
                        </ListItem>
                    </View>
                ) 
                })}

                {km.map((res, i)=> {
                return (
                    <View style={styles.conteudo}>
                        <ListItem key={i} Component={TouchableScale} friction={90} tension={100} activeScale={0.95}  linearGradientProps={{ colors: ['#0bbcc9', '#3025f4'], start: { x: 1, y: 0 },end: { x: 0.2, y: 0 }, }} ViewComponent={LinearGradient}>
                        <ListItem.Content>
                            <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
                            Check KM - Certificado
                            </ListItem.Title>
                            <ListItem.Subtitle style={{ color: 'white' }}>
                            {res.conteudo}
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron color="white" />
                        </ListItem>
                    </View>
                ) 
                })}

            </View>
            <View style={styles.button}>
                <Button title="Voltar" buttonStyle={{ backgroundColor: '#0bbcc9'}} onPress={() => navigation.goBack()} />
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