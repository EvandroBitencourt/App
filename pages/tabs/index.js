import React from 'react';
import { Tab, TabView, Header, Input} from 'react-native-elements';
import { Comprar } from '../comprar/index';
import { Vender } from '../vender/index';
import { Checkkm } from '../checkkm/index';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

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
        backgroundColor: '#2089DC',
        color: '#fff',
    },
    texto2: {
        color: '#fff',
        fontSize: 14
    }
 })