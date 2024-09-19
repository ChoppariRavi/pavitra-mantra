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
import { useTranslation } from "react-i18next";

const steps = ["S", "M", "L", "XL"];
const sizes: any = {
  S: 14,
  M: 18,
  L: 22,
  XL: 24,
};

const Mantra = () => {
  const { t } = useTranslation();
  const { state } = useData();
  // console.log('[language]', steps.indexOf(state.fSize) , (steps.indexOf(state.fSize) + 1) * 4 + 13)
  const navigation: any = useNavigation();
  const { id = "001", item = null } = navigation
    .getState()
    .routes?.find(({ name }: any) => name === "mantra").params;
  // console.log(navigation.routes);
  const [fontSize, setFontSize] = React.useState("M");
  console.log('[fontSize]', fontSize);
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
            <ThemedText style={styles.title}>{t(item?.title)}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.scrollWrapper}>
            <ScrollView style={styles.scrollView}>
              <ThemedText
                style={[
                  styles.description,
                  {
                    fontSize: sizes[fontSize],
                    lineHeight: sizes[fontSize] + 12,
                  },
                ]}
              >
                {t(item.id)}
              </ThemedText>
            </ScrollView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.fontSizeWrapper}>
        <HorizontalStepper onChange={(i) => setFontSize(i)} />
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
    backgroundColor: "#f4f6fc",
  },
  backButton: {
    backgroundColor: "#fbcd2f",
    padding: 8,
    marginBottom: 4,
    borderRadius: 4,
  },
  scrollView: {
    // borderRadius: 8,
    backgroundColor: "#FFF",
    paddingHorizontal: 12,
  },
  itemContainer: {
    // padding: 5,
    // borderRadius: 8,
    backgroundColor: "#f4f6fc",
  },
  title: {
    // fontSize: 22,
    textAlign: "center",
    fontFamily: "hind-bold",
    lineHeight: 48,
  },
  description: {
    fontSize: 18,
    color: "#000000",
    lineHeight: 48,
    // backgroundColor: "#FFF",
    // fontFamily: "hind-semibold",
  },
  itemWrapper: {
    flex: 18,
    // height: "100%",
    padding: 5,
    backgroundColor: "#f4f6fc",
  },
  fontSizeWrapper: {
    flex: 2,
    // height: "8%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#fbcd2f",
  },
});

export default Mantra;
