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
import { useData } from "@/store/DataContext";

const Mantra = () => {
  const { state } = useData();
  // console.log('[language]', state.language)
  const navigation: any = useNavigation();
  const {
    id = "001",
    name = "",
    sloka = null,
    item = null
  } = navigation
    .getState()
    .routes?.find(({ name }: any) => name === "mantra").params;
  // console.log(navigation.routes);
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
              <AntDesign name="left" size={18} color="black" />
            </Pressable>
            <ThemedText style={styles.title}>{item?.[state.language].title || name}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.scrollWrapper}>
            <ScrollView style={styles.scrollView}>
              <ThemedText
                style={[
                  styles.description,
                  { fontSize: fontSize, lineHeight: fontSize + 8 },
                ]}
              >
                {item[state.language].content}
              </ThemedText>
            </ScrollView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.fontSizeWrapper}>
        <HorizontalStepper onChange={(i) => setFontSize((i + 1) * 4 + 11)} />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#f4f6fc",
  },
  scrollWrapper: {
    // padding: 12,
    borderRadius: 8,
  },
  header: {
    flexDirection: "row",
    // borderBottomWidth: 2,
    borderColor: "#fbcd2f",
    gap: 8,
    alignItems: "center",
    marginBottom: 4,
    backgroundColor: "#f4f6fc"
  },
  backButton: {
    backgroundColor: "#fbcd2f",
    padding: 8,
    marginBottom: 4,
    borderRadius: 4,
  },
  scrollView: {
    borderRadius: 8,
    backgroundColor: "#FFF",
    paddingHorizontal: 12
  },
  itemContainer: {
    padding: 5,
    borderRadius: 8,
    backgroundColor: "#f4f6fc",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "hind-bold",
    lineHeight: 34,
  },
  description: {
    fontSize: 18,
    color: "#000000",
    lineHeight: 42,
    // backgroundColor: "#FFF",
    // fontFamily: "hind-semibold",
  },
  itemWrapper: {
    height: "79.75%",
    padding: 5,
    backgroundColor: "#f4f6fc",
  },
  fontSizeWrapper: {
    height: "8%",
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: "#fbcd2f",
  },
});

export default Mantra;
