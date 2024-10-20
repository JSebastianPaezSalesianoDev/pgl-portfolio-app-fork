// Header.tsx
import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export type HeaderProps = {
  displayMyInfo: () => void;
  displayMyRepo: () => void;
  title: string;
};

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.firsttoprowContainer}>{props.title}</Text>
      <View style={styles.rowTopSecondContainer}>
        <Pressable style={styles.buttonruta} onPress={props.displayMyInfo}>
          <Text style={[styles.buttonText, styles.shadoxboxing]}>Mi info</Text>
        </Pressable>
        <Pressable style={styles.buttonruta} onPress={props.displayMyRepo}>
          <Text style={styles.buttonText}>Mi Repo</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  firsttoprowContainer: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonruta: {
    width: "50%",
    paddingVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  shadoxboxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});

export default Header;
