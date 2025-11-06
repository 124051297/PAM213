import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

 
      return (
       
        <Text> hola</Text>
      );
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
