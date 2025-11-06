import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputYAlert from './TextInputYAlert';
import ImageBackgroungYSlapshScreen from './ImageBackgroungYSlapshScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicato from './ActivityIndicato';
import Repaso1 from './repaso1';


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
      
    case 'ScrollViewScreen':
      return <ScrollViewScreen/>;
  
     case 'Repaso1':
      return <Repaso1 />;

    default:
      return (
        <View style={styles.container}>
          <Text>Menú de Práctica</Text>
          <Button title="Práctica: Contador" onPress={() => setScreen('contador')} />
          <Button title="Práctica: Botones" onPress={() => setScreen('botones')} />
          <Button title="Práctica: Text Input y Alert" onPress={() => setScreen('TextInput')} />
          <Button title="Práctica: ImageBackgroung Y SlapshScreen" onPress={() => setScreen('ImageBackgroung')} />
          <Button title="Práctica: ScrollView" onPress={() => setScreen('ScrollViewScreen')} />
          <Button title="Práctica: Repaso 1" onPress={() => setScreen('Repaso1')} />
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

