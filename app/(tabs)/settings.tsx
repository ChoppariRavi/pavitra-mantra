import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import RadioButtonGroup from "@/components/RadioButtonGroup";
import { useData } from "@/store/DataContext";
import i18n from "../../translation";

const options = [
  { label: "English", value: "english", locale: 'en' },
  { label: "हिंदी", value: "hindi", locale: 'hi' },
  { label: "తెలుగు", value: "telugu", locale: 'te' },
];

export default function TabTwoScreen() {
  const { state, dispatch } = useData();
  

  const handleValueChange = (value: any) => {
    // console.log('[SET_LANGUAGE]', value)
    dispatch({ type: 'SET_LANGUAGE', payload: { value } })
    i18n.changeLanguage(value.substr(0, 2))
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
