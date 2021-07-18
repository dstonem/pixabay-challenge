import React, { useState, useEffect } from "react";
import { TextInput, Keyboard, StyleSheet } from "react-native";

export default function Form({ handleChange, val }) {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const _keyboardDidShow = () => setKeyboardStatus("Keyboard Shown");
  const _keyboardDidHide = () => setKeyboardStatus("Keyboard Hidden");

  return (
    <TextInput
      placeholder="Enter search text"
      style={[
        styles.input,
        {
          borderColor: focused ? "#333" : "#888",
          borderRadius: focused ? 10 : 5,
          backgroundColor: focused ? "#fff" : "#eee",
        },
      ]}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onChangeText={(text) => handleChange(text)}
      value={val}
      onSubmitEditing={Keyboard.dismiss}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 10,
    marginHorizontal: 10,
    borderWidth: 2,
  },
});
