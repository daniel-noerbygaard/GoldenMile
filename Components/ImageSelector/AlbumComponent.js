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
import { countFilledImages } from "../../Utility/utils";
import { useState, useEffect } from "react";
import * as Icon from "react-native-feather";

const rows = new Array(4).fill(0);
const columns = new Array(3).fill(0);
const { width } = Dimensions.get("window");
const IMG_SIZE = 0.32 * width;
const IMG_COLLECTION_HEIGHT = IMG_SIZE * 4;
const IMG_COLLECTION_WIDTH = IMG_SIZE * 3;

export default function AlbumComponent({ navigation, route }) {
  let assets = [];
  const participantList = route.params.participantList;
  const [assetsWithInfo, setAssetsWithInfo] = useState([]);
  const [photoSelection, setPhotoSelection] = useState(
    new Array(12).fill(false)
  );
  const [isSelected, setIsSelected] = useState(false);
  const [photo, setPhoto] = useState("");

  const getAssets = async () => {
    const album = await MediaLibrary.getAlbumAsync("Golden Mile");
    assets = (await MediaLibrary.getAssetsAsync({ album: album })).assets;
    for (let index = 0; index < assets.length; index++) {
      let assetWithInfo = await MediaLibrary.getAssetInfoAsync(assets[index]);
      setAssetsWithInfo((prev) => [...prev, assetWithInfo]);
    }
  };

  useEffect(() => {
    getAssets();
  }, []);

  const selectImage = (index) => {
    const updatedArray = photoSelection.map((val, i) => {
      if (i === index) {
        return true;
      } else {
        return false;
      }
    });
    setIsSelected(true);
    setPhotoSelection(updatedArray);
    setPhoto(assetsWithInfo[index].localUri)
  };

  const goBack = () => {
    navigation.navigate("ImageScreen", {
      participantList: participantList,
      binArray: route.params.binArray,
      shotIndex: route.params.shotIndex,
    });
  };

  const approveImage = () => {
    participantList[route.params.imgIndex].ImgPath = photo;
    navigation.navigate("ImageScreen", {
      participantList: participantList,
      binArray: route.params.binArray,
      shotIndex: route.params.shotIndex,
      disableStart: countFilledImages(participantList),
      cameraOption: false
    });
  };

  const produceImages = (i) => {
    const imageList = [];
    for (let j = 0; j < columns.length; j++) {
      const index = i * columns.length + j;
      imageList.push(
        <View style={styles.imgColumn} key={i.toString() + "_" + j.toString()}>
          {assetsWithInfo.length > index && (
            <Pressable
              style={{ width: "100%", height: "100%" }}
              onPress={() => selectImage(index)}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderColor: colors.yellow,
                  borderWidth: photoSelection[index] === true ? 3 : 0,
                }}
                source={{ uri: assetsWithInfo[index].localUri }}
              />
            </Pressable>
          )}
        </View>
      );
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
      <Pressable style={styles.backButton} onPress={goBack}>
        <Icon.ChevronLeft width={30} height={30} color={colors.yellow} />
      </Pressable>
      <Pressable
        style={[styles.selectButton, { opacity: isSelected ? 1 : 0.3 }]}
        disabled={!isSelected}
        onPress={() => approveImage()}
      >
        <Icon.Check width={30} height={30} color={colors.yellow}></Icon.Check>
      </Pressable>
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
  },

  selectButton: {
    width: "15%",
    aspectRatio: 1,
    position: "absolute",
    top: "10%",
    left: "2%",
    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    width: "15%",
    aspectRatio: 1,
    position: "absolute",
    top: "5%",
    left: "1%",
    justifyContent: "center",
    alignItems: "center",
  },
});
