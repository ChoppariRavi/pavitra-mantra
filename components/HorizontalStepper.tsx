import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { useData } from "@/store/DataContext";

const steps = ["S", "M", "L", "XL"];

const HorizontalStepper = ({ onChange = (item: any) => {} }) => {
  const { state, dispatch } = useData();
  const [currentStep, setCurrentStep] = useState(state.fSize);
  // console.log(state)

  useEffect(() => {
    onChange(currentStep);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.stepperContainer}>
        {steps.map((value, index) => (
          <View key={value} style={styles.stepContainer}>
            <Pressable
              style={[
                styles.circle,
                value === currentStep && styles.activeCircle,
              ]}
              onPress={() => {
                setCurrentStep(value);
                onChange(value);
                dispatch({ type: "SET_FONT_SIZE", payload: { value } });
              }}
            >
              <ThemedText style={styles.stepText}>{value}</ThemedText>
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
    padding: 16,
    backgroundColor: "#FFFFFF",
    flex: 1,
    justifyContent: "center",
  },
  stepperContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    gap: 8,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 38,
    height: 38,
    borderRadius: 4,
    backgroundColor: "#f4f6fd",
    justifyContent: "center",
    alignItems: "center",
  },
  activeCircle: {
    backgroundColor: "#fbcd2f",
  },
  stepText: {
    color: "#333",
    fontFamily: "hind-semibold",
    lineHeight: 38,
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
