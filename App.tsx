import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Header from "./components/Header";
import Card from "./components/Card";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);

  return (
    <View style={styles.container}>
      <Header displayMyQr={() => setDisplayMyQR(true)} />

      {displayMyQR ? (
        <View style={styles.bodyContainer}>
          <Card
            id={22}
            title="Mi Título"
            description="Esta es una descripción de ejemplo."
            imgSource={require("./assets/SofyanAmrabat.jpg")}
          />
        </View>
      ) : (
        <View style={styles.bodyContainer}>
          <View style={styles.centerQRCode}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    textTransform: "capitalize",
    marginVertical: 10,
  },
  scrollContainer: {
    width: "100%",
  },
  listItem: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 15,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
    marginVertical: 5,
  },
  centerQRCode: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
