// RadioButton.js
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

const RadioButton = ({ label, value, selected, onPress }: any) => {
  return (
    <Pressable onPress={() => onPress(value)} style={styles.container}>
      <Ionicons
        size={32}
        name={selected ? "radio-button-on" : "radio-button-off"}
        style={[selected ? styles.radioOn : styles.radioOff]}
      />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
  radioOff: {
    color: "#577590",
  },
  radioOn: {
    color: "#fbcd2f",
  },
});

export default RadioButton;
