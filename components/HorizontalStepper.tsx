import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { ThemedText } from "./ThemedText";

const steps = ["S", "M", "L", "XL"];

const HorizontalStepper = ({ onChange = (item: any) => {} }) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.stepperContainer}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <Pressable
              style={[
                styles.circle,
                index === currentStep && styles.activeCircle,
              ]}
              onPress={() => {
                setCurrentStep(index);
                onChange(index + 1);
              }}
            >
              <ThemedText style={styles.stepText}>{step}</ThemedText>
            </Pressable>
            <Text style={styles.label}>{""}</Text>
            {/* {index < steps.length - 1 && <View style={styles.line} />} */}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // backgroundColor: "#F5F5F5",
    flex: 1,
    justifyContent: "center",
  },
  stepperContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: 40,
    gap: 8
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 38,
    height: 38,
    borderRadius: 4,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  activeCircle: {
    backgroundColor: "#B10819",
  },
  stepText: {
    color: "#fff",
    fontWeight: "bold",
  },
  label: {
    // marginHorizontal: 10,
  },
  line: {
    width: 76,
    height: 4,
    backgroundColor: "#ccc",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HorizontalStepper;
