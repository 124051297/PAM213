import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet,ImageBackground, Image,TouchableOpacity,StatusBar, TextInput,Button, Alert, Platform,Switch,} from "react-native";

const LOGO_IMAGEN = require("../assets/Practica11/Picture1.jpg");
const SPLASH_IMAGE = require("../assets/Practica11/fondo.jpg");
const MAIN_IMAGE = require("../assets/Practica11/fondo.jpg");

export default function Repaso1() {
  const [isLoading, setIsLoading] = useState(true);
  const [correo, setCorreo] = useState("");
  const [nombre, setNombre] = useState("");
  const [terminos, setTerminos] = useState(false);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const mostrarAlerta = () => {
   
    if (correo.trim() === "" ) {
      if (Platform.OS === "web") {
        alert("Ingresa tu correo antes de continuar.");
      } else {
        Alert.alert(
          "Atención",
          "Ingresa tu correo  antes de continuar.",
          [{ text: "Aceptar" }]
        );
      }
      return; 
    }

     if (nombre.trim() === "" ) {
      if (Platform.OS === "web") {
        alert("Ingresa tu nombre antes de continuar.");
      } else {
        Alert.alert(
          "Atención",
          "Ingresa tu nombre antes de continuar.",
          [{ text: "Aceptar" }]
        );
      }
      return; 
    }


    if (!regex.test(correo)) {
      if (Platform.OS === "web") {
        alert("El formato del correo no es válido.");
      } else {
        Alert.alert("Error", "El formato del correo no es válido.", [
          { text: "Aceptar" },
        ]);
      }
      return;
    }

    if (!terminos) {
      if (Platform.OS === "web") {
        alert("Debes aceptar los términos y condiciones para continuar.");
      } else {
        Alert.alert(
          "Atención",
          "Debes aceptar los términos y condiciones para continuar.",
          [{ text: "Aceptar" }]
        );
      }
      return;
    }

    
    if (Platform.OS === "web") {
      alert(`Registro Exitoso,\n Nombre:  ${nombre} \n Corrreo: ${correo}`);
    } else {
      Alert.alert("Éxito", "¡Registro exitoso!", [{ text: "Aceptar" }]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ImageBackground
        source={SPLASH_IMAGE}
        resizeMode="cover"
        imageStyle={styles.splashImageStyle}
        style={styles.splashBackground}
      >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.splashOverlay}>
          <Image source={LOGO_IMAGEN} style={styles.logo} resizeMode="contain" />
          <Text style={styles.splashSubtitle}>Cargando aplicación...</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={MAIN_IMAGE}
      resizeMode="cover"
      imageStyle={styles.mainImageStyle}
      style={styles.mainBackground}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.mainOverlay}>

        <TextInput
          style={styles.input}
          placeholder="Ingresa tu Nombre"
          placeholderTextColor="#ccc"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo"
          placeholderTextColor="#ccc"
          value={correo}
          onChangeText={setCorreo}
        />

        

    
        <View style={styles.switchRow}>
          <Text style={{ color: "#fff" }}>Aceptar términos y condiciones</Text>
          <Switch
            value={terminos}
            onValueChange={(value) => setTerminos(value)}
          />
        </View>

        <Button title="Registrarse" onPress={mostrarAlerta} color="#61dafb" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff20",
    borderRadius: 10
  },

  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    width: "80%",
    padding: 10,
    marginBottom: 15,
    color: "white",
  },

  splashBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashImageStyle: { opacity: 0.85 },
  splashOverlay: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.45)",
    padding: 24,
    borderRadius: 12,
  },
  logo: { width: 100, height: 100, marginBottom: 12 },
  splashSubtitle: { color: "#dbeafe", marginTop: 8 },
  mainBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainImageStyle: { opacity: 0.9 },
  mainOverlay: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    borderRadius: 12,
  },
});
