import React from 'react';
import { Tab, TabView, Text, Icon } from 'react-native-elements';


export default function Tabs() {

    const [index, setIndex] = React.useState(0);

    return (<>
    <Tab value={index} onChange={setIndex}>
        <Tab.Item title="Comprar" />
        <Tab.Item title="Vender" />
        <Tab.Item title="Check KM" />
        <Tab.Item title="Opçoes" />
    </Tab>

    <TabView value={index} onChange={setIndex} >
    <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
        <Text h1>Comprar</Text>
    </TabView.Item>
    <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
        <Text h1>Vender</Text>
    </TabView.Item>
    <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
        <Text h1>Check KM</Text>
    </TabView.Item>
    <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
        <Text h1>Opçoes</Text>
    </TabView.Item>
    </TabView>
    </>)
}