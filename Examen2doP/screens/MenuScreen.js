import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import SplashScreen from './SplashScreen'
export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');


  switch (screen) {
    case 'SplashScreen':
      return <SplashScreen />;

       
      
    default:
      return (
       
         <View style={styles.container}>
          <Text>Menú de Práctica</Text>
          <Button title="Splassh" onPress={() => setScreen('SplashScreen')} />    
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
