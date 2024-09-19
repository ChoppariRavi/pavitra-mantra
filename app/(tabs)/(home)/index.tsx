import {
  Image,
  StyleSheet,
  FlatList,
  Pressable,
  Dimensions,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "expo-router";
import { slokas } from "@/assets/data/slokas";
import { useData } from "@/store/DataContext";
import { useTranslation } from "react-i18next";
import "../../../translation";
import Header from "@/components/Header";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const { t } = useTranslation();
  const { state } = useData();
  const navigation: any = useNavigation();
  const RenderItem = ({ item }: any) => (
    <ThemedView style={styles.item}>
      <Pressable
        style={styles.imageWrapper}
        onPress={() =>
          navigation.navigate("list", {
            ...item,
          })
        }
      >
        <Image source={item.image} style={styles.img} />
      </Pressable>
      <ThemedText style={styles.text}>{t(item.god)}</ThemedText>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>{t("Pavitra Mantras")}</ThemedText>
      </ThemedView> */}
      <Header title={t("Pavitra Mantras")} />
      <FlatList
        data={slokas}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 8,
    // paddingHorizontal: 4,
    // backgroundColor: "##fbcd2f"
    backgroundColor: "#f4f6fc",
    width: "100%",
  },
  titleContainer: {
    gap: 8,
    backgroundColor: "#f4f6fc",
  },
  title: {
    fontFamily: "hind-bold",
    fontSize: 18,
    lineHeight: 32,
    width: "100%",
    textAlign: "center",
  },
  item: {
    borderRadius: 8,
    margin: '1%',
    width: "48%",
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 2,
    // Shadow property for Android
    elevation: 5,
  },
  imageWrapper: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: "hind-bold",
    paddingHorizontal: 8,
    textTransform: "uppercase",
    textAlign: "center",
    margin: 8,
  },
  img: {
    width: "100%",
    height: 180,
    // borderRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  logo: {
    width: "100%",
    height: 45,
  },
  flatListContent: {
    padding: 8,
  },
});
