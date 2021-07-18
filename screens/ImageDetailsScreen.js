import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function ImageDetailsScreen({ route, navigation }) {
  let img = route.params.img;
  return (
    <View>
      <Image
        source={{ uri: img.largeImageURL }}
        style={{ width: "100%", height: "100%" }}
      />
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>{img.user}</Text>
        <Text style={styles.infoText}>{img.tags}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoBox: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  infoText: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "right",
    textShadowColor: "black",
    textShadowRadius: 5,
  },
});
