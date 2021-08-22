import React from 'react';
import { StyleSheet, ScrollView, View, TextInput} from 'react-native'
import { Text, Button } from 'react-native-elements';
import Picker from 'react-native-universal-picker';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import api from "../../service";

export class Vender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          placa: '',
          km: '',
          versao: '',
          cambio: '',
          direcao: '',
          motor: '',
          preco: 0,
          airbag: false,
          arcondicionado: false,
          vidroeletrico: false,
          sensordere: false,
          blindado: false,
          financiado: false,
          multas: false,
          unicodono: false,
          alarme: false,
          travaeletrica: false,
          som: false,
          cameradere: false,
          aceitatrocas: false,
          ipvaatraso: false,
          leilao : false,
          obs: '',
          telefone: '',
        };
      }
    render() {
        return (<>
            <ScrollView style={styles.view}>

                <Text style={styles.text}>Anunciar o Veiculo</Text>

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Digite a Placa"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => this.setState({ placa: text.replace("-", "") })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Digite a Quilimetragem"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => this.setState({ km: text })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Digite a Versão"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => this.setState({ versao: text })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />

                <View style={[styles.picker, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }>
                    <Picker  
                        selectedValue={this.state.cambio}
                        onValueChange={(itemValue, itemIndex) => this.setState({ cambio: itemValue}) }>
                            <Picker.Item label="Selecione o Cambio" value="" />
                            <Picker.Item label="Manual" value="Manual" />
                            <Picker.Item label="Automático" value="Automático" />
                            <Picker.Item label="Automatizado" value="Automatizado" />
                    </Picker>
                </View>

                <View style={[styles.picker, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }>
                    <Picker  
                        selectedValue={this.state.direcao}
                        onValueChange={(itemValue, itemIndex) => this.setState({ direcao: itemValue}) }>
                            <Picker.Item label="Selecione o tipo da direção" value="" />
                            <Picker.Item label="Normal" value="Normal" />
                            <Picker.Item label="Direção hidráulica" value="Direção hidráulica" />
                            <Picker.Item label="Direção eletrica" value="Direção eletrica" />
                    </Picker>
                </View>

                <View style={[styles.picker, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }>
                    <Picker  
                        selectedValue={this.state.motor}
                        onValueChange={(itemValue, itemIndex) => this.setState({ motor: itemValue}) }>
                            <Picker.Item label="Selecione a Motorização" value="" />
                            <Picker.Item label="1.0" value="1.0" />
                            <Picker.Item label="1.2" value="1.2" />
                            <Picker.Item label="1.3" value="1.3" />
                            <Picker.Item label="1.4" value="1.4" />
                            <Picker.Item label="1.5" value="1.5" />
                            <Picker.Item label="1.6" value="1.6" />
                            <Picker.Item label="1.7" value="1.7" />
                            <Picker.Item label="1.8" value="1.8" />
                            <Picker.Item label="1.9" value="1.9" />
                            <Picker.Item label="2.0" value="2.0" />
                            <Picker.Item label="2.2" value="2.2" />
                            <Picker.Item label="2.3" value="2.3" />
                            <Picker.Item label="2.4" value="2.4" />
                            <Picker.Item label="2.5" value="2.5" />
                            <Picker.Item label="2.7" value="2.7" />
                            <Picker.Item label="2.8" value="2.8" />
                            <Picker.Item label="3.0" value="3.0" />
                            <Picker.Item label="3.2" value="3.2" />
                            <Picker.Item label="3.3" value="3.3" />
                            <Picker.Item label="3.5" value="3.5" />
                            <Picker.Item label="3.6" value="3.6" />
                            <Picker.Item label="3.9" value="3.9" />
                            <Picker.Item label="4.0" value="4.0" />
                            <Picker.Item label="4.1" value="4.1" />
                            <Picker.Item label="4.2" value="4.2" />
                            <Picker.Item label="4.3" value="4.3" />
                            <Picker.Item label="4.4" value="4.4" />
                            <Picker.Item label="4.5" value="4.5" />
                            <Picker.Item label="4.6" value="4.6" />
                            <Picker.Item label="4.7" value="4.7" />
                            <Picker.Item label="4.8" value="4.8" />
                            <Picker.Item label="4.9" value="4.9" />
                            <Picker.Item label="5.0" value="5.0" />
                            <Picker.Item label="5.1" value="5.1" />
                            <Picker.Item label="5.2" value="5.2" />
                            <Picker.Item label="5.3" value="5.3" />
                            <Picker.Item label="5.4" value="5.4" />
                            <Picker.Item label="5.5" value="5.5" />
                            <Picker.Item label="5.6" value="5.6" />
                            <Picker.Item label="5.7" value="5.7" />
                            <Picker.Item label="5.8" value="5.8" />
                            <Picker.Item label="5.9" value="5.9" />
                            <Picker.Item label="6.0" value="6.0" />
                            <Picker.Item label="6.1" value="6.1" />
                            <Picker.Item label="6.2" value="6.2" />
                            <Picker.Item label="6.3" value="6.3" />
                            <Picker.Item label="6.4" value="6.4" />
                            <Picker.Item label="6.5" value="6.5" />
                            <Picker.Item label="6.6" value="6.6" />
                            <Picker.Item label="6.7" value="6.7" />
                            <Picker.Item label="V6" value="V6" />
                            <Picker.Item label="V8" value="V8" />
                            <Picker.Item label="125" value="125" />
                            <Picker.Item label="150" value="150" />
                            <Picker.Item label="160" value="160" />
                            <Picker.Item label="250" value="250" />
                            <Picker.Item label="300" value="300" />
                            <Picker.Item label="400" value="400" />
                            <Picker.Item label="500" value="500" />
                            <Picker.Item label="600" value="600" />
                            <Picker.Item label="650" value="650" />
                            <Picker.Item label="750" value="750" />
                            <Picker.Item label="800" value="800" />
                            <Picker.Item label="1000" value="1000" />
                            <Picker.Item label="1200" value="1200" />
                            <Picker.Item label="1600" value="1600" />
                            <Picker.Item label="1700" value="1700" />
                    </Picker>
                </View>

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Digite o Preço"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => this.setState({ preco: text })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />
                
                <Text style={styles.text}>Acessórios</Text>
                
                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Air Bag"
                        isChecked={this.state.airbag}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ airbag: !this.state.airbag })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Ar Condicionado"
                        isChecked={this.state.arcondicionado}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ arcondicionado: !this.state.arcondicionado })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Vidro Eletrico"
                        isChecked={this.state.vidroeletrico}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ vidroeletrico: !this.state.vidroeletrico })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Sensor de ré"
                        isChecked={this.state.sensordere}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ sensordere: !this.state.sensordere })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Blindado"
                        isChecked={this.state.blindado}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ blindado: !this.state.blindado })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Financiado"
                        isChecked={this.state.financiado}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ financiado: !this.state.financiado })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Multas"
                        isChecked={this.state.multas}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ multas: !this.state.multas })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Unico dono"
                        isChecked={this.state.unicodono}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ unicodono: !this.state.unicodono })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Alarme"
                        isChecked={this.state.alarme}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ alarme: !this.state.alarme })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Trava Eletrica"
                        isChecked={this.state.travaeletrica}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ travaeletrica: !this.state.travaeletrica })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Som"
                        isChecked={this.state.som}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ som: !this.state.som })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Camera de ré"
                        isChecked={this.state.cameradere}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ cameradere: !this.state.cameradere })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Aceita Trocas"
                        isChecked={this.state.aceitatrocas}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ aceitatrocas: !this.state.aceitatrocas })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Ipva atraso"
                        isChecked={this.state.ipvaatraso}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ ipvaatraso: !this.state.ipvaatraso })}
                    />
                </View>

                <View style={{  marginLeft: 60, marginTop: 10 }} >
                    <BouncyCheckbox
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        text="Leilão"
                        isChecked={this.state.leilao}
                        iconStyle={{ borderColor: "green" }}
                        textStyle={{ fontWeight: 'bold' }}
                        onPress={ () => this.setState({ leilao: !this.state.leilao })}
                    />
                </View>

                <Text style={styles.text}>Informações Adicionais</Text>

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Observação sobre o veiculo"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => this.setState({ obs: text })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />

                <TextInput 
                    style={[styles.input, {marginLeft:20, marginRight:20 , marginTop:10, marginBottom: 10, elevation: 3 }] }
                    placeholder="Telefone Adicional"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCompleteType="off"
                    onChangeText={text => this.setState({ telefone: text })}
                    autoCorrect={false}
                    containerStyle={{ marginTop: 10 }}
                />


                <Text style={styles.text}>Imagens do Veiculo</Text>

                <View style={styles.button}>
                    <Button loading={this.state.loading}title="Vender já" buttonStyle={{ backgroundColor: '#0bbcc9'}} onPress={() => {}} />
                </View>
            </ScrollView>

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
     },
     input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
      },
      picker:{
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 22,
        borderRadius: 7,
      },
      button:{
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          marginTop: 10
      },
      checkbox: {
          textAlign: 'center'
      }
 })