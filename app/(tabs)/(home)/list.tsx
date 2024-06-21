import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const List = () => {
  const navigation: any = useNavigation();
  const {
    data = [],
    god = "",
    image,
    thumbnail,
  } = navigation
    .getState()
    .routes.find(({ name }: any) => name === "list")?.params;
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <ThemedView style={styles.headerContainer}>
          <Image source={image} style={styles.headerLogo} />
        </ThemedView>
      }
    >
      <ThemedView style={styles.container}>
        {data.map((item: any) => (
          <Pressable
            key={item.name}
            style={styles.item}
            onPress={() =>
              navigation.navigate("mantra", {
                ...item,
                god,
                image,
                thumbnail,
              })
            }
          >
            <Image source={thumbnail} style={styles.thumbnail} />
            <ThemedView style={styles.titleContainer}>
              <ThemedText style={styles.text}>{item.name}</ThemedText>
              <ThemedText style={styles.desc}>
                {item.sloka.trim().substr(0, 30)}...
              </ThemedText>
            </ThemedView>
          </Pressable>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
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
  title: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "hind-bold",
    lineHeight: 34,
  },
  container: {
    paddingVertical: 5,
    backgroundColor: "#B10819",
  },
  titleContainer: {
    width: "90%",
    backgroundColor: "#B10819",
    justifyContent: "flex-start",
  },
  item: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 5,
    padding: 8,
    alignItems: "center",
    borderRadius: 5,
    borderBottomWidth: 1.5,
    borderColor: "#FFF",
    flexDirection: "row",
    gap: 8,
    width: "95%",
  },
  thumbnail: {
    width: 45,
    height: 45,
    borderRadius: 45,
    borderWidth: 1.5,
    borderColor: "#FFF",
    objectFit: "contain",
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "hind-bold",
    lineHeight: 24,
    height: 18,
  },
  desc: {
    color: "#d5d5d5",
    fontSize: 14,
    fontFamily: "hind-bold",
    lineHeight: 20,
    // height: 14
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  headerContainer: {
    margin: 0,
  },
  headerLogo: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
  },
});

export default List;
