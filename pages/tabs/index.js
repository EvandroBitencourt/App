import React from 'react';
import { Tab, TabView, Header } from 'react-native-elements';
import { Comprar } from '../comprar/index';
import { Vender } from '../vender/index';
import { Checkkm } from '../checkkm/index';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Tabs({ navigation }) {

    const [index, setIndex] = React.useState(0);

    return (<>
    <Header
    placement="left"
    //leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'Check KM', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
    />
    <Tab value={index} onChange={setIndex}>
        <Tab.Item title="Comprar" icon={<Icon name="shopping-cart" size={30} color="white" /> } buttonStyle={styles.texto} />
        <Tab.Item title="Vender" icon={<Icon name="credit-card-alt" size={30} color="white" /> } buttonStyle={styles.texto}/>
        <Tab.Item title="Check KM" icon={<Icon name="car" size={30} color="white" /> } buttonStyle={styles.texto}/>
    </Tab>

    <TabView value={index} onChange={setIndex} >
    <TabView.Item style={{ width: '100%' }}>      
        <Comprar navigation={navigation} index={index}/>
    </TabView.Item>
    <TabView.Item style={{ width: '100%' }}>
        <Vender index={index} />
    </TabView.Item>
    <TabView.Item style={{ width: '100%' }}>
        <Checkkm navigation={navigation} index={index}/>
    </TabView.Item>
    </TabView>
    </>)
}
const styles = StyleSheet.create({
    texto: {
        backgroundColor: '#1572aa',
        color: '#fff',
        fontSize: 2
    }
 })