import React,{useEffect, useState} from "react";
import { View, Text, StyleSheet, ImageBackground, Image,TouchableOpacity, StatusBar, ScrollView } from "react-native";
import { Button } from "react-native-web";


const SPLASH_IMAGE = require('../assets/RecursosExamen/fondo.jpg');
const LOGO_IMAGEN = require('../assets/RecursosExamen/Picture1.jpg');
const MAIN_IMAGE = require('../assets/RecursosExamen/fondo.jpg');

export default function ImageBackgroungYSlapshScreen()
{

  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(()=>{

    const timer = setTimeout(()=>{
      setIsLoading(false);
    }, 1000);
    return()=> clearTimeout(timer);
  }, []);


  if(isLoading)
  {
    return(

      <ImageBackground
       source={SPLASH_IMAGE}
      resizeMode="cover"
      imageStyle={styles.splashImageStyle}
      style={styles.splashBackground}
      >

        <StatusBar

          barStyle="light-content" backgroundColor="transparent" translucent
        />

        <View style={styles.splashOverlay}>
          <Image source={LOGO_IMAGEN} style={styles.logo} resizeMode="contain"></Image>
          <Text style={styles.splashSubtitle}>Cargando aplicacion...</Text>
        </View>
     

      </ImageBackground>
    );

  }


  return(


    <ScrollView >


    <View style ={styles.centrar}>
       <View style ={styles.recuadros} >
            <Text style={styles.titulos} >Imagen 1</Text>
           <ImageBackground
            source={SPLASH_IMAGE}
            resizeMode="cover"
            imageStyle={styles.splashImageStyle}
            style={styles.splashBackground}>
                
           </ImageBackground>
           <Text>Esta imagen tiene la funcion de rellenar el examen c:</Text>
           <TouchableOpacity>
                <Button  style ={styles.botones}   onPress={()=> alert('Titulo: Imagen 1 \n Detalles: Imagen elavorada y saca de internet a base de uso del examen ',[{ text: 'Cancelar', style: 'cancel' }]) }title="Ver detalles"></Button>
           </TouchableOpacity>
         
       </View>


        <View style ={styles.recuadros} >
            <Text style={styles.titulos}>Imagen 2</Text>
           <ImageBackground
            source={SPLASH_IMAGE}
            resizeMode="cover"
            imageStyle={styles.splashImageStyle}
            style={styles.splashBackground}>
                
           </ImageBackground>
           <Text>Esta imagen tiene la funcion de rellenar el examen c:</Text>
           <TouchableOpacity>
                <Button  style ={styles.botones}  onPress={()=> alert('Titulo: Imagen 2 \n Detalles: Imagen elavorada y saca de internet a base de uso del examen ',[{ text: 'Cancelar', style: 'cancel' }])} title="Ver detalles"></Button>
           </TouchableOpacity>
         
       </View>

          <View style ={styles.recuadros} >
            <Text style={styles.titulos}>Imagen 3</Text>
           <ImageBackground
            source={SPLASH_IMAGE}
            resizeMode="cover"
            imageStyle={styles.splashImageStyle}
            style={styles.splashBackground}>
                
           </ImageBackground>
           <Text>Esta imagen tiene la funcion de rellenar el examen c:</Text>
           <TouchableOpacity>
                <Button  style ={styles.botones}  onPress={()=> alert('Titulo: Imagen 3 \n Detalles: Imagen elavorada y saca de internet a base de uso del examen ',[{ text: 'Cancelar', style: 'cancel' }])} title="Ver detalles"></Button>
           </TouchableOpacity>
         
       </View>

           <View style ={styles.recuadros} >
            <Text style={styles.titulos}>Imagen 4</Text>
           <ImageBackground
            source={SPLASH_IMAGE}
            resizeMode="cover"
            imageStyle={styles.splashImageStyle}
            style={styles.splashBackground}>
                
           </ImageBackground>
           <Text>Esta imagen tiene la funcion de rellenar el examen c:</Text>
           <TouchableOpacity>
                <Button  style ={styles.botones}  onPress={()=> alert('Titulo: Imagen 4 \n Detalles: Imagen elavorada y saca de internet a base de uso del examen ',[{ text: 'Cancelar', style: 'cancel' }])} title="Ver detalles"></Button>
           </TouchableOpacity>
         
       </View>


           <View style ={styles.recuadros} >
            <Text style={styles.titulos}>Imagen 5</Text>
           <ImageBackground
            source={SPLASH_IMAGE}
            resizeMode="cover"
            imageStyle={styles.splashImageStyle}
            style={styles.splashBackground}>
                
           </ImageBackground>
           <Text>Esta imagen tiene la funcion de rellenar el examen c:</Text>
           <TouchableOpacity>
                <Button  style ={styles.botones}  onPress={()=> alert('Titulo: Imagen 5 \n Detalles: Imagen elavorada y saca de internet a base de uso del examen ',[{ text: 'Cancelar', style: 'cancel' }])} title="Ver detalles"></Button>
           </TouchableOpacity>
         
       </View>

           <View style ={styles.recuadros} >
            <Text style={styles.titulos}>Imagen 6</Text>
           <ImageBackground
            source={SPLASH_IMAGE}
            resizeMode="cover"
            imageStyle={styles.splashImageStyle}
            style={styles.splashBackground}>
                
           </ImageBackground>
           <Text>Esta imagen tiene la funcion de rellenar el examen c:</Text>
           <TouchableOpacity>
                <Button  style ={styles.botones}  onPress={()=> alert('Titulo: Imagen 6 \n Detalles: Imagen elavorada y saca de internet a base de uso del examen ',[{ text: 'Cancelar', style: 'cancel' }])} title="Ver detalles"></Button>
           </TouchableOpacity>
         
       </View>


    </View>

    </ScrollView>


  );
}


const styles = StyleSheet.create({

    titulos:{
        fontSize: 25,
       
    },

    centrar:{
        alignContent: 'center',
        alignItems: 'center',
        gap: 20,
    },


    recuadros:{

    gap: 10,    
    justifyContent: 'center',
     alignItems: 'center',
    backgroundColor: '', 
    padding: 24,
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderRadius: 12,
     width: 500,
    height: 500,
    marginBottom: 12,
       
    },
  splashBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImageStyle: {
    opacity: 0.85,
  },

  splashOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)', 
    padding: 24,
    borderRadius: 12,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
 



 

});