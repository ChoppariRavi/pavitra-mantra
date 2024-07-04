import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import RadioButtonGroup from "@/components/RadioButtonGroup";
import { useData } from "@/store/DataContext";

const options = [
  { label: "English", value: "english" },
  { label: "हिंदी", value: "hindi" },
  { label: "తెలుగు", value: "telugu" },
];

export default function TabTwoScreen() {
  const { state, dispatch } = useData();
  

  const handleValueChange = (value: any) => {
    console.log('[SET_LANGUAGE]', value)
    dispatch({ type: 'SET_LANGUAGE', payload: { value } })
  };
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading}>Choose Language</ThemedText>
      <RadioButtonGroup options={options} onValueChange={handleValueChange} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontFamily: "hind-bold",
    fontSize: 18
  },

  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
