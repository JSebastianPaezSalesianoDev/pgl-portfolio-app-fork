// App.tsx
import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import QRCode from "react-native-qrcode-svg";
import Header from "./components/Header";
import Card from "./components/Card";
import AboutMe from "./components/AboutMe";
import { cards } from "./data/AboutMeData";
import { info } from "./data/HeaderData";
import { infocard } from "./data/CardData";
import PhraseOfDay from "./components/PhraseOfDay";

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
        <Pressable
          onPress={toggleTheme}
          style={isDarkMode ? styles.themeButtonDark : styles.themeButtonLight}
        >
          <Text style={styles.buttonText}>
            {isDarkMode ? (
              <Entypo name="moon" size={24} color="black" />
            ) : (
              <Feather name="sun" size={24} color="black" />
            )}
          </Text>
        </Pressable>

        {displayMyQR ? (
          <>
            <Card
              id={22}
              title={infocard.name}
              description={infocard.myInfo}
              imgSource={require("./assets/f1.jpg")}
            />

            <AboutMe aboutme={cards} />
          </>
        ) : (
          <View style={styles.centerQRCode}>
            <QRCode value="https://github.com/JSebastianPaezSalesianoDev" />
          </View>
        )}
        <PhraseOfDay />
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
    backgroundColor: "#e2e9f3",
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
  themeButtonDark: {
    padding: 10,
    backgroundColor: "#E3C1E8",
    marginVertical: 10,
    borderRadius: 115,
    width: 50,
  },
  themeButtonLight: {
    padding: 10,
    backgroundColor: "#A3C8E6",
    marginVertical: 10,
    borderRadius: 115,
    width: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
