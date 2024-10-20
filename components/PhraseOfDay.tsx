import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { phrasesAdrianNeverSaid } from "../data/Phrases";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const PhraseOfDay = () => {
  const [phrase, setPhrase] = useState<string>("Frasesita");

  const showRandomPhrase = () => {
    const randomIndex = Math.floor(
      Math.random() * phrasesAdrianNeverSaid.length
    );
    const randomPhrase = phrasesAdrianNeverSaid[randomIndex];
    setPhrase(randomPhrase);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={showRandomPhrase}>
        <Text style={styles.buttonText}>Frasesita del dia!</Text>
      </Pressable>

      {phrase ? <Text style={styles.phraseText}>{phrase}</Text> : null}
      <MaterialCommunityIcons name="script-text" size={24} color="black" />
    </View>
  );
};

export default PhraseOfDay;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "white",
    width: 370,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    padding: 15,
    backgroundColor: "pink",
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "italic",
  },
  phraseText: {
    marginTop: 20,
    fontSize: 16,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 10,
  },
});
