import React, {useState} from 'react';
import { Text, StyleSheet, View, ScrollView, Button } from 'react-native';

export default function ScrollViewScreen() 
{
  const [item, setItems] = useState(["Opción 1", "Opción 2", "Opción 3"]);
  
  
  const agregarOpcion = () => 
    {
      const nuevaOpcion = `Opción ${item.length + 1}`;
      setItems([...item,nuevaOpcion]);
    }; 


  const borrarUltima = () =>
  {

    if(item.length > 3)
    {

      setItems(item.slice(0,item.length -1));

    }
    else
    {

      alert("Solo se borra la opciones que agregaste");

    }

  };


  return (
    <View style={styles.container}>

      <Text style={styles.title} >ScrollView</Text>
    
      <ScrollView 
        style ={styles.scroll}
        contentContainerStyle ={styles.content}
       // horizontal ={true}
        showsVerticalScrollIdicator ={true}
        persistentScrollbar ={true}
        scrollEnabled={true}
     >

      {item.map((item,index)=>(

      <View key={index} style={styles.box}>

        <Text style= {styles.Text}>{item} </Text>

      </View>

      ))}

      </ScrollView>

        <View style ={styles.buttonContainer}>

          <Button title='Agregar opcion' color={"#8d18d1ff"} onPress={agregarOpcion}> </Button>
          <View style={styles.space}></View>
          <Button title='Borrar opcion' color={"#a41bb6ff"} onPress={borrarUltima}> </Button>
        </View>


    </View>
  );
}


const styles= StyleSheet.create
({

container:
{

  flex:1,
  padding:20,
  backgroundColor: "#EEF2FF"

},
title:
{

  fontSize: 26,
  fontWeight: 'bold',
  textAlign: 'center',
  marginVertical: 15,
  color: '#2C3E50'

},

scroll:
{

    flex: 1,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#F9FAFB'

},

content:
{

  paddingVertical: 15,
  alignItems: 'center',

},

box:
{

  backgroundColor: "#82B6ED",
  width: '90%',
  padding: 20,
  marginVertical: 10,
  borderRadius: 15,
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius:  5,

},

Text:
{

  fontSize: 18,
  color: "#1F2937",
  textAlign: 'center'

},

buttonContainer:
{

  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: 10

},

space:
{
  width: 20
}



})