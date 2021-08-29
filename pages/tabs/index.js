import React, {useEffect} from 'react';
import { Tab,  Header, Button, Badge, Text} from 'react-native-elements';
import { Comprar } from '../comprar/index';
import { Vender } from '../vender/index';
import { Checkkm } from '../checkkm/index';
import { StyleSheet, TextInput,View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../service";

export default function Tabs({ navigation }) {
    const [index, setIndex] = React.useState(0);
 
    useEffect(() => {
        AsyncStorage.getItem('storage_token').then(res => {
            if(res == ''){
                sairApp();
            }

        })
    }, []);
    
    const sairApp = () => {
        AsyncStorage.setItem('storage_token', '');
        navigation.navigate('Login');
    }

    return (<>
    <Header placement="center" >
        <Button title="Lance" buttonStyle={styles.texto} onPress={ () => navigation.navigate('lance') }/>
        <Button title="Check KM" buttonStyle={styles.texto} onPress={ () => setIndex(0) }/>
        <Button title="SAIR" buttonStyle={styles.texto} onPress={ () => sairApp() }/>
    </Header>
    
    <Tab value={index} onChange={setIndex}>
        <Tab.Item title="Comprar" icon={<Icon name="shopping-cart" size={30} color="white" /> } buttonStyle={styles.texto} titleStyle={styles.texto2}/>
        <Tab.Item title="Vender" icon={<Icon name="credit-card-alt" size={30} color="white" /> } buttonStyle={styles.texto} titleStyle={styles.texto2}/>
        <Tab.Item title="Check-KM" icon={<Icon name="car" size={30} color="white" /> } buttonStyle={styles.texto} titleStyle={styles.texto2}/>
    </Tab>
    
    {(() => {
        switch (index) {
          case 0:   return <Comprar navigation={navigation} index={index}/>;
          case 1:   return <Vender navigation={navigation} setIndex={setIndex} />;
          case 2:   return <Checkkm navigation={navigation} index={index}/>;
          default:  return <Comprar navigation={navigation} index={index}/>;
        }
      })()}
    
    </>)
}
const styles = StyleSheet.create({
    texto: {
        backgroundColor: '#2089DC',
        color: '#fff',
    },
    texto2: {
        color: '#fff',
        fontSize: 14
    }
 })