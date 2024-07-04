// RadioButtonGroup.js
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RadioButton from "./RadioButton";
import { useData } from "@/store/DataContext";

const RadioButtonGroup = ({ options, onValueChange }: any) => {
  const { state } = useData();
  const [selectedValue, setSelectedValue] = useState(state.language);

  const handlePress = (value: any) => {
    setSelectedValue(value);
    onValueChange(value);
  };

  return (
    <View style={styles.container}>
      {options.map((option: any) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          selected={option.value === selectedValue}
          onPress={handlePress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default RadioButtonGroup;
