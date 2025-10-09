import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';


export default function App()   
{
 const [contador, setContador]= useState(0);

  return(

    <View style={styles.container}>

    <Text style={styles.texto}>Contador:</Text>
    <Text style={styles.texto2}>{contador}</Text>
   
    <View style={styles.botones}>
    <Button title='Agregar' onPress={()=>setContador(contador+1)}> </Button>
    <Button title='Quitar' onPress={()=>setContador(contador-1)}> </Button>
    <Button title='Reiniciar' onPress={()=>setContador(contador*0)}> </Button>
    </View>
   
    <StatusBar style="auto"></StatusBar>
    </View>

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
  },
  
  texto:
  {

    color: 'black',
    fontSize: 30,
    fontFamily: 'Times New Romans',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
 
  },

  texto2:
  {

    color: 'red',
    fontSize: 35,
    fontFamily: 'Courier',
    fontWeight: '700',
    fontStyle: 'normal',
    textDecorationLine: 'underline',
 
  },

  botones:
  {
    
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,

  },

});
