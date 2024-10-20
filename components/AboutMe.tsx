import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

export type AboutMeProps = {
  aboutme: string[];
};

const AboutMe = ({ aboutme }: AboutMeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Cosas que me gustan mucho:</Text>
      <FlatList
        data={aboutme}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default AboutMe;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    textTransform: "capitalize",
    marginVertical: 10,
    backgroundColor: "white",
    color: "black",
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
});
