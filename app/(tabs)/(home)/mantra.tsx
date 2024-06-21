import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation, useRouter } from "expo-router";
import HorizontalStepper from "@/components/HorizontalStepper";
import { lazy } from "react";

const Mantra = () => {
  const navigation: any = useNavigation();
  const {
    id = '001',
    name = "",
    sloka = "",
  } = navigation
    .getState()
    .routes?.find(({ name }: any) => name === "mantra").params;
  console.log(navigation.routes)
  const [fontSize, setFontSize] = React.useState(18);
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.itemWrapper}>
        <ThemedView key={id} style={styles.itemContainer}>
          <ThemedView style={styles.header}>
            <Pressable
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="left" size={18} color="white" />
            </Pressable>
            <ThemedText style={styles.title}>{name}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.scrollWrapper}>
            <ScrollView style={styles.scrollView}>
              <ThemedText
                style={[
                  styles.description,
                  { fontSize: fontSize, lineHeight: fontSize + 8 },
                ]}
              >
                {sloka}
              </ThemedText>
            </ScrollView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.fontSizeWrapper}>
        <HorizontalStepper onChange={(i) => setFontSize(i * 4 + 11)} />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollWrapper: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#B10819",
  },
  header: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#B10819",
    gap: 8,
    alignItems: "center",
    marginBottom: 4,
  },
  backButton: {
    backgroundColor: "#B10819",
    padding: 8,
    marginBottom: 4,
    borderRadius: 4,
  },
  scrollView: {
    borderRadius: 8,
  },
  itemContainer: {
    padding: 5,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "hind-bold",
    lineHeight: 34,
  },
  description: {
    fontSize: 24,
    color: "#FFFFFF",
    lineHeight: 42,
    fontFamily: "hind-bold",
  },
  itemWrapper: {
    height: "79.75%",
    padding: 5,
  },
  fontSizeWrapper: {
    height: "8%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#B10819",
  },
});

export default Mantra;
