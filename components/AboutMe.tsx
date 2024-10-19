// AboutMe.tsx
import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export type AboutMeProps = {
  aboutme: string[];
};

const AboutMe = ({ aboutme }: AboutMeProps) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Cosas que me gustan mucho:</Text>
      <ScrollView style={styles.scrollContainer}>
        {aboutme.map((item, index) => (
          <Text key={index} style={styles.listItem}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default AboutMe;

const styles = StyleSheet.create({
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
});
