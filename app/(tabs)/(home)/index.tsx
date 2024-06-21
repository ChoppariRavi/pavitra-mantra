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
import { slokas } from "@/assets/data/slokas/hanuman/slokas";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
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
      <ThemedText style={styles.text}>{item.name}</ThemedText>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>Pavitra Mantras</ThemedText>
      </ThemedView>
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
    paddingVertical: 8,
    paddingHorizontal: 4,
    // backgroundColor: "#FA9300"
    backgroundColor: "#B10819",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#B10819",
  },
  title: {
    color: "white",
    fontFamily: "hind-bold",
    fontSize: 24,
    lineHeight: 32,
    borderBottomColor: "#FA9300",
    borderBottomWidth: 2,
    width: "100%",
    textAlign: "center",
  },
  item: {
    borderRadius: 8,
    margin: 4,
    backgroundColor: "#B10819",
  },
  imageWrapper: {
    borderWidth: 2,
    borderColor: "#FA9300",
    backgroundColor: "#FA9300",
    borderRadius: 8,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "hind-regular",
    textAlign: "center",
    textTransform: "uppercase",
    // marginVertical: 4,
  },
  img: {
    width: width / 2 - 22,
    height: 180,
    borderRadius: 8,
  },
  logo: {
    width: "100%",
    height: 45,
  },
  flatListContent: {
    padding: 8,
  },
});
