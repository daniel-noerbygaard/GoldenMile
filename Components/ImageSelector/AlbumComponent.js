import * as MediaLibrary from "expo-media-library";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import { colors } from "../../Utility/enums";
import { useState, useEffect } from "react";

const rows = new Array(4).fill(0);
const columns = new Array(3).fill(0);
const { width } = Dimensions.get("window");
const IMG_SIZE = 0.32 * width;
const IMG_COLLECTION_HEIGHT = IMG_SIZE * 4;
const IMG_COLLECTION_WIDTH = IMG_SIZE * 3;

export default function AlbumComponent({ navigation, route }) {
  let assets = [];
  let numImg = 0;
  const participantList = route.params.participantList;
  const [assetsWithInfo, setAssetsWithInfo] = useState([]);
  const [photo, setPhoto] = useState("");
  const getAssets = async () => {
    const album = await MediaLibrary.getAlbumAsync("Golden Mile");
    assets = (await MediaLibrary.getAssetsAsync({ album: album })).assets;
    debugger;
    for (let index = 0; index < assets.length; index++) {
      let assetWithInfo = await MediaLibrary.getAssetInfoAsync(assets[index]);
      setAssetsWithInfo((prev) => [...prev, assetWithInfo]);
    }
  };

  useEffect(() => {
    getAssets();
  }, []);

  const approveImage = () => {
    participantList[route.params.imgIndex].ImgPath = photo.uri;
    navigation.navigate("ImageScreen", {
      participantList: participantList,
      binArray: route.params.binArray,
      shotIndex: route.params.shotIndex,
      disableStart: countFilledImages(participantList),
    });
  };

  const handlePress = (e) => {
    debugger;
    return;
  };

  const produceImages = (i) => {
    const imageList = [];
    for (let j = 0; j < columns.length; j++) {
      imageList.push(
        <View style={styles.imgColumn} key={i.toString() + "_" + j.toString()}>
          {assetsWithInfo.length > numImg && (
            <Pressable
              style={{ width: "100%", height: "100%" }}
              onPress={(e) => handlePress(e)}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{ uri: assetsWithInfo[numImg].localUri }}
              />
            </Pressable>
          )}
        </View>
      );
      numImg++;
    }
    return imageList;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Images</Text>
      </View>
      {assetsWithInfo.length > 0 && (
        <View style={styles.collectionContainer}>
          {rows.map((row, i) => (
            <View style={styles.imgRow} key={i.toString()}>
              {produceImages(i)}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.marina,
    alignItems: "center",
  },

  headerContainer: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 60,
    color: colors.yellow,
    marginTop: "20%",
  },

  collectionContainer: {
    height: IMG_COLLECTION_HEIGHT,
    width: IMG_COLLECTION_WIDTH,
    top: "5%",
  },

  imgRow: {
    height: IMG_SIZE,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  imgColumn: {
    height: IMG_SIZE * 0.97,
    aspectRatio: 1,
    borderWidth: 1,
  },
});
