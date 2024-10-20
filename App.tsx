// App.tsx
import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";

import QRCode from "react-native-qrcode-svg";
import Header from "./components/Header";
import Card from "./components/Card";
import AboutMe from "./components/AboutMe";
import { cards } from "./data/AboutMeData";
import { info } from "./data/HeaderData";
import { infocard } from "./data/CardData";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  };

  return (
    <View
      style={[
        styles.container,
        isDarkMode ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <Header
        displayMyInfo={() => setDisplayMyQR(true)}
        displayMyRepo={() => setDisplayMyQR(false)}
        title={info.title}
        myInfo={info.myInfo}
        myRepo={info.myRepo}
      />

      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <Pressable onPress={toggleTheme} style={styles.themeButton}>
          <Text style={styles.buttonText}>
            Cambiar a {isDarkMode ? "modo claro" : "modo oscuro"}
          </Text>
        </Pressable>

        {displayMyQR ? (
          <>
            <Card
              id={22}
              title={infocard.name}
              description={infocard.myInfo}
              imgSource={require("./assets/SofyanAmrabat.jpg")}
            />
            <AboutMe aboutme={cards} />
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
    alignItems: "center",
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  lightContainer: {
    backgroundColor: "#fff",
  },
  bodyContainer: {
    width: "100%",
  },
  centerQRCode: {
    margin: 50,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  themeButton: {
    padding: 15,
    backgroundColor: "#007BFF",
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
