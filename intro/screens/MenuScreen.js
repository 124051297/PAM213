import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputYAlert from './TextInputYAlert';
import ImageBackgroungYSlapshScreen from './ImageBackgroungYSlapshScreen';
import ScrollView from './ScrollView';
import ActivityIndicato from './ActivityIndicato';


export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;

    case 'botones':
      return <BotonesScreen />;

    case 'TextInput':
      return <TextInputYAlert />;

    case 'ImageBackgroung':
      return <ImageBackgroungYSlapshScreen />;
      
    case 'ScrollView':
      return <ScrollView />;
  

    default:
      return (
        <View style={styles.container}>
          <Text>Menú de Práctica</Text>
          <Button title="Práctica: Contador" onPress={() => setScreen('contador')} />
          <Button title="Práctica: Botones" onPress={() => setScreen('botones')} />
          <Button title="Práctica: Text Input y Alert" onPress={() => setScreen('TextInput')} />
          <Button title="Práctica: ImageBackgroung Y SlapshScreen" onPress={() => setScreen('ImageBackgroung')} />
          <Button title="Práctica: ScrollView" onPress={() => setScreen('ScrollView')} />
        </View>
      );
  }
}


const styles = StyleSheet.create
({
  container: 
  {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
})

