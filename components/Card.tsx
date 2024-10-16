import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export type CardProps = {
  id: number;
  title: string;
  description: string;
  imgSource: any;
};

const Card = ({ title, description, imgSource }: CardProps) => {
  return (
    <View style={styles.bodystails}>
      <Image style={styles.avatar} source={imgSource}></Image>
      <View
        style={{
          margin: 10,
          backgroundColor: "lightgray",
          padding: 10,
          borderRadius: 10,
          width: "70%",
        }}
      ></View>
      <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 20 }}>
        {title}
      </Text>
      <Text>{description}</Text>

      <Text style={styles.body}>{}</Text>
      <View
        style={{
          margin: 10,
          backgroundColor: "lightgray",
          padding: 10,
          borderRadius: 10,
          width: "70%",
        }}
      ></View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  bodystails: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "40%",
  },

  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  body: {
    color: "red",
    fontSize: 16,
    textAlign: "justify",
  },
});
