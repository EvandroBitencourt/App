import React from 'react';
import { Tab, TabView, Header, Input} from 'react-native-elements';
import { Comprar } from '../comprar/index';
import { Vender } from '../vender/index';
import { Checkkm } from '../checkkm/index';
import { StyleSheet, TextInput,View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Tabs({ navigation }) {

    const [index, setIndex] = React.useState(0);
    
    const sairApp = () => {
        console.log('ok')
    }

    return (<>
    <Header
    placement="left"
    centerComponent={{ text: 'Check KM', style: { color: '#fff', fontSize: 20 }}}
    rightComponent={{ icon: 'home', color: '#fff' }}
    />
    
    <Tab value={index} onChange={setIndex}>
        <Tab.Item title="Comprar" icon={<Icon name="shopping-cart" size={30} color="white" /> } buttonStyle={styles.texto} titleStyle={styles.texto2}/>
        <Tab.Item title="Vender" icon={<Icon name="credit-card-alt" size={30} color="white" /> } buttonStyle={styles.texto} titleStyle={styles.texto2}/>
        <Tab.Item title="Check-KM" icon={<Icon name="car" size={30} color="white" /> } buttonStyle={styles.texto} titleStyle={styles.texto2}/>
    </Tab>
    
    {(() => {
        switch (index) {
          case 0:   return <Comprar navigation={navigation} index={index}/>;
          case 1:   return <Vender index={index} />;
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