import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Header from "./components/Header";
import Card from "./components/Card";
import AboutMe from "./components/AboutMe";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const favoriteThings = [
    "Programar",
    "Leer libros",
    "Escuchar música",
    "Jugar videojuegos",
    "Viajar",
  ];

  return (
    <View style={styles.container}>
      <Header displayMyQr={() => setDisplayMyQR(true)} />

      <ScrollView contentContainerStyle={styles.bodyContainer}>
        {displayMyQR ? (
          <>
            <Card
              id={22}
              title="Mi Título"
              description="Esta es una descripción de ejemplo."
              imgSource={require("./assets/SofyanAmrabat.jpg")}
            />
            <AboutMe aboutme={favoriteThings} />
          </>
        ) : (
          <View style={styles.centerQRCode}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  bodyContainer: {
    width: "100%",
  },
  centerQRCode: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
