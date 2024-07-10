import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Image, Pressable, View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useData } from "@/store/DataContext";
import { useTranslation } from "react-i18next";

const List = () => {
  const { t } = useTranslation();
  const { state } = useData();
  const navigation: any = useNavigation();
  const {
    data = [],
    god = "",
    image,
    thumbnail,
    slokas,
  } = navigation
    .getState()
    .routes.find(({ name }: any) => name === "list")?.params;
  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#fbcd2f", dark: "#fbcd2f" }}
        headerImage={
          <ThemedView style={styles.headerContainer}>
            <Image source={image} style={styles.headerLogo} />
          </ThemedView>
        }
      >
        <ThemedView style={styles.container}>
          {slokas.map((item: any, idx: number) => (
            <Pressable
              key={item.id}
              style={styles.item}
              onPress={() =>
                navigation.navigate("mantra", {
                  ...item,
                  god,
                  image,
                  thumbnail,
                  item,
                })
              }
            >
              <View style={styles.titleContainer}>
                <ThemedView style={styles.thumbnail}>
                  <ThemedText style={styles.text}>{idx + 1}</ThemedText>
                </ThemedView>
                <ThemedView style={{ backgroundColor: "#FFF" }}>
                  <ThemedText style={styles.text}>{t(item?.title)}</ThemedText>
                  <ThemedText style={styles.desc}>
                    {t(item?.id).trim().substr(0, 20)}...
                  </ThemedText>
                </ThemedView>
              </View>
              {/* <View style={styles.rigthArrow}>
                <AntDesign name="arrowright" size={14} color="black" />
              </View> */}
            </Pressable>
          ))}
        </ThemedView>
      </ParallaxScrollView>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={12} color="black" />
        <ThemedText style={styles.backText}>Back</ThemedText>
      </Pressable>
    </>
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
    backgroundColor: "#FFF",
    paddingVertical: 4,
    paddingHorizontal: 8,
    // marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 100,
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    // Shadow property for Android
    elevation: 5,
  },
  backText: {
    paddingTop: 4,
    fontFamily: "hind-bold",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "hind-bold",
    lineHeight: 36,
    // width: '100%'
  },
  container: {
    paddingVertical: 5,
    backgroundColor: "#f4f6fc",
  },
  titleContainer: {
    width: "82%",
    // flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  item: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 8,
    padding: 8,
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    // Shadow property for Android
    elevation: 5,
    // width: '95%'
  },
  thumbnail: {
    // width: 55,
    // height: 55,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#FFF",
    backgroundColor: "#fbcd2f",
    objectFit: "contain",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  text: {
    // color: "#FFF",
    fontSize: 16,
    fontFamily: "hind-bold",
    // lineHeight: 32,
    // width: "98%",
    flexWrap: "wrap",
    textTransform: "capitalize"
  },
  desc: {
    color: "#a5a5a5",
    fontSize: 12,
    fontFamily: "hind-bold",
    lineHeight: 16,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  headerContainer: {
    margin: 0,
    position: "relative",
  },
  headerLogo: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
  },
  rigthArrow: {
    backgroundColor: "#fbcd2f",
    padding: 8,
    marginRight: 8,
    borderRadius: 4,
  },
});

export default List;
