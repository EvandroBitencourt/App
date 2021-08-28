import React from 'react';
import { StyleSheet, ScrollView, View, TextInput,TouchableOpacity, Alert} from 'react-native'
import { Text, Button } from 'react-native-elements';
import Picker from 'react-native-universal-picker';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import api from "../../service";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
          resourcePath: {},
          foto01: '',
          foto02: '',
          foto03: '',
          foto04: '',
          foto05: '',
          foto06: '',
          fotomomento: '',
        };
      }
      vender = () => {
          if(this.state.placa == '' || this.state.km == '' || this.state.versao == '' || this.state.cambio == '' || this.state.direcao == '' || this.state.motor == '' || this.state.preco == '' || this.state.foto01 == ''){
            Alert.alert(
                "Atenção!",
                "INFORMAÇÕES NÃO PREENCIDAS!",
                [ { text: "OK" } ]
              );
            return;
          }
          this.setState({ loading: true});
          AsyncStorage.getItem('storage_token').then(res => {
             
            var data = new FormData();
            data.append('api', true);
            data.append('versao', this.state.versao);
            data.append('cambio', this.state.cambio);
            data.append('direcao', this.state.direcao);
            data.append('motor', this.state.motor);
            data.append('km', this.state.km);
            data.append('airbag', this.state.airbag);
            data.append('alarme', this.state.alarme);
            data.append('arcondicionado', this.state.arcondicionado);
            data.append('travaeletrica', this.state.travaeletrica);
            data.append('vidroeletrico', this.state.vidroeletrico);
            data.append('som', this.state.som);
            data.append('sensorre', this.state.sensordere);
            data.append('camerare', this.state.cameradere);
            data.append('blindado', this.state.blindado);
            data.append('aceitatrocas', this.state.aceitatrocas);
            data.append('financiado', this.state.financiado);
            data.append('ipva', this.state.ipvaatraso);
            data.append('multas', this.state.multas);
            data.append('leilao', this.state.leilao);
            data.append('unicodono', this.state.unicodono);
            data.append('preco', this.state.preco);
            data.append('contato', this.state.telefone);
            data.append('obs', this.state.obs);


            data.append('foto',{
                uri: Platform.OS === 'android' ? this.state.foto01 : 'file://' + this.state.foto01,
                name: 'test',
                type: 'image/jpeg' // or your mime type what you want
            });

            if(this.state.foto02 != ''){
                data.append('foto01',{
                    uri: Platform.OS === 'android' ? this.state.foto02 : 'file://' + this.state.foto02,
                    name: 'test',
                    type: 'image/jpeg' // or your mime type what you want
                });
            }

            if(this.state.foto03 != ''){
                data.append('foto02',{
                    uri: Platform.OS === 'android' ? this.state.foto03 : 'file://' + this.state.foto03,
                    name: 'test',
                    type: 'image/jpeg' // or your mime type what you want
                });
            }

            if(this.state.foto04 != ''){
                data.append('foto03',{
                    uri: Platform.OS === 'android' ? this.state.foto04 : 'file://' + this.state.foto04,
                    name: 'test',
                    type: 'image/jpeg' // or your mime type what you want
                });
            }

            if(this.state.foto05 != ''){
                data.append('foto04',{
                    uri: Platform.OS === 'android' ? this.state.foto05 : 'file://' + this.state.foto05,
                    name: 'test',
                    type: 'image/jpeg' // or your mime type what you want
                });
            }

            if(this.state.foto06 != ''){
                data.append('foto05',{
                    uri: Platform.OS === 'android' ? this.state.foto06 : 'file://' + this.state.foto06,
                    name: 'test',
                    type: 'image/jpeg' // or your mime type what you want
                });
            }

            api.defaults.headers.common = {"Authorization" : `Bearer ${res}`, 'Content-Type': 'multipart/form-data'}
            api.post("/api/auth/vender", data)
            .then((response) => {
                console.log(response.data)
                // Alert.alert(
                //     "Parabens!",
                //     "Carro Anunciado com sucesso!",
                //     [ { text: "OK", onPress: () => this.props.navigation.navigate('Tabs') } ]
                //   );
                this.setState({ loading: false});
            })
            .catch((err) => {
                Alert.alert(
                    "Atenção!",
                    "Placa não encontrada, tente novamente!",
                    [ { text: "OK" } ]
                  );
                  this.setState({ loading: false});
            });
        })

      }


      foto01 = () => {
        this.setState({fotomomento: 'foto01'});
        this.selectFile();
      }
      foto02 = () => {
        this.setState({fotomomento: 'foto02'});
        this.selectFile();
      }
      foto03 = () => {
        this.setState({fotomomento: 'foto03'});
        this.selectFile();
      }
      foto04 = () => {
        this.setState({fotomomento: 'foto04'});
        this.selectFile();
      }
      foto05 = () => {
        this.setState({fotomomento: 'foto05'});
        this.selectFile();
      }
      foto06 = () => {
        this.setState({fotomomento: 'foto06'});
        this.selectFile();
      }
      selectFile = () => {
          
        var options = {
          title: 'Select Image',
          customButtons: [
            { 
              name: 'customOptionKey', 
              title: 'Choose file from Custom Option' 
            },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
    
        launchCamera(options, (response) => { // Use launchImageLibrary to open image gallery
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
                
              if (this.state.fotomomento == "foto01"){
                  this.setState({ foto01: response.assets[0].uri })
              }
              if (this.state.fotomomento == "foto02"){
                this.setState({ foto02: response.assets[0].uri })
              }
              if (this.state.fotomomento == "foto03"){
                this.setState({ foto03: response.assets[0].uri })
              }
              if (this.state.fotomomento == "foto04"){
                this.setState({ foto04: response.assets[0].uri })
              }
              if (this.state.fotomomento == "foto05"){
                this.setState({ foto05: response.assets[0].uri })
              }
              if (this.state.fotomomento == "foto06"){
                this.setState({ foto06: response.assets[0].uri })
              }

            }
        });
      };

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

                <Text style={[styles.text,{marginBottom: 10}]}>Imagens do Veiculo</Text>

                {this.state.foto01 == '' ? <Text style={{textAlign: 'center'}}>Foto da Frente não informada</Text> : <View style={{justifyContent: 'center', alignItems: 'center'}}><Image source={{ uri: this.state.foto01 }} style={{ width: 200, height: 200 }}  PlaceholderContent={<ActivityIndicator />}/></View>}
                <View style={styles.button}>
                    <TouchableOpacity onPress={this.foto01}>
                        <Text style={styles.foto}>Tirar Foto Frente</Text>
                    </TouchableOpacity>
                </View>

                {this.state.foto02 == '' ? <Text style={{textAlign: 'center'}}>Foto Lateral Motorista não informada</Text> : <View style={{justifyContent: 'center', alignItems: 'center'}}><Image source={{ uri: this.state.foto02 }} style={{ width: 200, height: 200 }}  PlaceholderContent={<ActivityIndicator />}/></View>}
                <View style={styles.button}>
                    <TouchableOpacity onPress={this.foto02}>
                        <Text style={styles.foto}>Tirar Foto Lateral Motorista</Text>
                    </TouchableOpacity>
                </View>

                {this.state.foto03 == '' ? <Text style={{textAlign: 'center'}}>Foto Lateral Passageiro não informada</Text> : <View style={{justifyContent: 'center', alignItems: 'center'}}><Image source={{ uri: this.state.foto03 }} style={{ width: 200, height: 200 }}  PlaceholderContent={<ActivityIndicator />}/></View>}
                <View style={styles.button}>
                    <TouchableOpacity onPress={this.foto03}>
                        <Text style={styles.foto}>Tirar Foto Lateral Passageiro</Text>
                    </TouchableOpacity>
                </View>

                {this.state.foto04 == '' ? <Text style={{textAlign: 'center'}}>Foto Traseira não informada</Text> : <View style={{justifyContent: 'center', alignItems: 'center'}}><Image source={{ uri: this.state.foto04 }} style={{ width: 200, height: 200 }}  PlaceholderContent={<ActivityIndicator />}/></View>}
                <View style={styles.button}>
                    <TouchableOpacity onPress={this.foto04}>
                        <Text style={styles.foto}>Tirar Foto Traseira</Text>
                    </TouchableOpacity>
                </View>

                {this.state.foto05 == '' ? <Text style={{textAlign: 'center'}}>Foto Traseira não informada</Text> : <View style={{justifyContent: 'center', alignItems: 'center'}}><Image source={{ uri: this.state.foto05 }} style={{ width: 200, height: 200 }}  PlaceholderContent={<ActivityIndicator />}/></View>}
                <View style={styles.button}>
                    <TouchableOpacity onPress={this.foto05}>
                        <Text style={styles.foto}>Tirar Foto Capo Aberto</Text>
                    </TouchableOpacity>
                </View>

                {this.state.foto06 == '' ? <Text style={{textAlign: 'center'}}>Foto Kilometragem não informada</Text> : <View style={{justifyContent: 'center', alignItems: 'center'}}><Image source={{ uri: this.state.foto06 }} style={{ width: 200, height: 200 }}  PlaceholderContent={<ActivityIndicator />}/></View>}
                <View style={styles.button}>
                    <TouchableOpacity onPress={this.foto06}>
                        <Text style={styles.foto}>Tirar Foto Kilometragem</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <Button loading={this.state.loading}title="Vender já" buttonStyle={{ backgroundColor: '#0bbcc9'}} onPress={this.vender} />
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
      },
      foto: {
          fontSize: 15,
          backgroundColor: '#0bbcc9',
          textAlign: 'center',
          borderRadius: 2,
          color: '#fff',
          padding: 10
      }
 })