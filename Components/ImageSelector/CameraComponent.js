import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  Animated,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import React from "react";
import { Pressable } from "react-native";
import * as Icon from "react-native-feather";
import * as imgManipulator from "expo-image-manipulator";
import * as MediaLibrary from "expo-media-library";
import { countFilledImages } from "../../Utility/utils";
import { colors } from "../../Utility/enums";
import { Animation } from "../../Utility/fadeAnimation";

export default function CameraComponent({ navigation, route }) {
  const { height, width } = Dimensions.get("window");
  const participantList = route.params.participantList;
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState();
  const cameraOffset = 0.5 * height - 0.65 * width;
  const animation = new Animation(useRef(new Animated.Value(0)).current);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);

  if (!hasCameraPermission) {
    return (
      <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        Camera permission not granted. Please change in settings.
      </Text>
    );
  }

  let takePhoto = async () => {
    const options = {
      quality: 1,
    };
    imgObject = await cameraRef.current.takePictureAsync(options);
    ratio = imgObject.width / width;
    const manipResult = await imgManipulator.manipulateAsync(
      imgObject.uri,
      [
        {
          crop: {
            height: ratio * width,
            width: ratio * width,
            originX: 0,
            originY: cameraOffset * ratio,
          },
        },
      ],
      { compress: 1 }
    );
    setPhoto(manipResult);
  };

  const savePhoto = async () => {
    const cameraRollPermission = await MediaLibrary.requestPermissionsAsync();
    if (cameraRollPermission.status !== "granted") {
      animation.startAnimation(4000);
    } else {
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      const album = await MediaLibrary.getAlbumAsync("Golden Mile");  
      if (!album) {
        await MediaLibrary.createAlbumAsync("Golden Mile", asset);
      }
      MediaLibrary.addAssetsToAlbumAsync(asset, album)
    }
  };

  const approveImage = async () => {
    participantList[route.params.imgIndex].ImgPath = photo.uri;
    navigation.navigate("ImageScreen", {
      participantList: participantList,
      binArray: route.params.binArray,
      shotIndex: route.params.shotIndex,
      disableStart: countFilledImages(participantList),
    });
  };

  const goBack = () => {
    navigation.navigate("ImageScreen", {
      participantList: participantList,
      binArray: route.params.binArray,
      shotIndex: route.params.shotIndex,
    });
  };

  const cancelPhoto = () => {
    setPhoto(null);
  };

  if (photo) {
    return (
      <>
        <View style={styles.previewContainer}>
          <Image
            style={{
              width: width,
              height: width,
              top: cameraOffset,
            }}
            source={{ uri: photo.uri }}
          />
          <Pressable
            style={[styles.heartButton, { top: cameraOffset + 0.05 * height }]}
            onPress={approveImage}
          >
            <Icon.Heart width={"100%"} height={"100%"} color={colors.white} />
          </Pressable>
          <Pressable style={styles.cancelButton} onPress={cancelPhoto}>
            <Icon.X width={30} height={30} color={colors.white}></Icon.X>
          </Pressable>
          <Pressable style={styles.downloadButton} onPress={savePhoto}>
            <Icon.Download
              width={30}
              height={30}
              color={colors.white}
            ></Icon.Download>
          </Pressable>
        </View>
        <Animated.View
          style={[
            styles.warningContainer,
            { top: cameraOffset + width / 2 },
            animation.AnimateInstance,
          ]}
        >
          <Text style={{ color: colors.yellow, width: "78%" }}>
            Camera roll permission not granted. Please change in settings.
          </Text>
        </Animated.View>
      </>
    );
  } else
    return (
      <>
        <Camera style={styles.camera} ref={cameraRef}>
          <View
            style={{
              height: cameraOffset,
              width: width,
              backgroundColor: colors.black,
            }}
          >
            <Pressable style={styles.backButton} onPress={goBack}>
              <Icon.ChevronLeft width={30} height={30} color={colors.white} />
            </Pressable>
          </View>
          <View
            style={{
              height: height - (cameraOffset + width),
              width: width,
              backgroundColor: colors.black,
              top: cameraOffset + width,
              position: "absolute",
              alignItems: "center",
            }}
          >
            <Pressable
              style={[styles.takePhoto, { top: 0.05 * height }]}
              onPress={takePhoto}
            />
          </View>
        </Camera>
      </>
    );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    alignItems: "center",
  },

  takePhoto: {
    width: "20%",
    aspectRatio: 1,
    borderRadius: "50%",
    borderWidth: 7,
    borderColor: colors.white,
  },

  cancelButton: {
    width: "15%",
    aspectRatio: 1,
    position: "absolute",
    top: "5%",
    left: "2%",
    justifyContent: "center",
    alignItems: "center",
  },

  downloadButton: {
    width: "15%",
    aspectRatio: 1,
    position: "absolute",
    top: "10%",
    left: "2%",
    justifyContent: "center",
    alignItems: "center",
  },

  previewContainer: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },

  heartButton: {
    width: "20%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    width: "15%",
    aspectRatio: 1,
    position: "absolute",
    top: "25%",
    left: "1%",
    justifyContent: "center",
    alignItems: "center",
  },

  permissionText: {
    position: "absolute",
    top: "50%",
  },

  warningContainer: {
    position: "absolute",
    width: "80%",
    height: "5%",
    alignSelf: "center",
    backgroundColor: colors.marina,
    justifyContent: "center",
    alignItems: "center",
  },
});
