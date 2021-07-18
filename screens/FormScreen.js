import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Linking,
} from "react-native";
import Form from "../components/Form";
import { useDebounce } from "use-debounce";
import useFetchImages from "../utils/hooks/useFetchImages";
import { useHeaderHeight } from "@react-navigation/stack";

export default function FormScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [value] = useDebounce(searchText, 1000);
  const [imagePreviewList, getImages] = useFetchImages();
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    getImages(value);
  }, [value]);

  return (
    <View style={[styles.screenContainer, { height: height - headerHeight }]}>
      <View style={styles.formContainer}>
        <Form handleChange={(text) => setSearchText(text)} val={searchText} />
      </View>
      <View style={styles.previewContainer}>
        {imagePreviewList.map((img) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ImageDetails", { img });
            }}
            style={styles.imagePreview}
          >
            <Image
              source={{ uri: img.previewURL }}
              style={[styles.imagePreview, { width: 400, height: 400 }]}
            />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://pixabay.com/")}
        style={styles.logoContainer}
      >
        <Image
          source={{ uri: "https://pixabay.com/static/img/logo_square.png" }}
          style={[styles.logo, { width: width / 3, height: width / 3 }]}
        />
      </TouchableOpacity>
    </View>
  );
}

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  //   screenContainer: {
  //     justifyContent: "space-around",
  //   },
  formContainer: {
    height: "30%",
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
  },
  logoContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  previewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  imagePreview: {
    flexBasis: "30%",
    flexGrow: 1,
    aspectRatio: 1,
    width: "40%",
  },
});
