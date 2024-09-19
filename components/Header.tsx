import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Header({ title }: { title: string }) {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.headerTitle}>{title}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbcd2f",
    margin: 0,
    // paddingVertical: 8,
    // paddingHorizontal: 16,
  },
  header: {
    backgroundColor: "#fbcd2f",
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontFamily: "hind-bold",
    fontSize: 18,
  },
});
