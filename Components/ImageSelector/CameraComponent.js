import { StyleSheet, Dimensions, View, Text, Image } from "react-native";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import React from "react";
import { Pressable } from "react-native";
import * as Icon from "react-native-feather";
import {
  manipulateAsync,
  ActionCrop,
  ActionResize,
  SaveFormat,
} from "expo-image-manipulator";
import * as MediaLibrary from 'expo-media-library'
import { countFilledImages } from "../../Utility/utils";
import { colors } from "../../Utility/enums";

export default function CameraComponent({ navigation, route }) {
  const { height, width } = Dimensions.get("window");
  const participantList = route.params.participantList;
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState();
  const cameraOffset = 0.5 * height - 0.65 * width;

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permission...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>Permission for camera not granted. Please change in settings.</Text>
    );
  }

  let takePhoto = async () => {
    const options = {
      quality: 1,
    };
    imgObject = await cameraRef.current.takePictureAsync(options);
    ratio = imgObject.width / width;
    const manipResult = await manipulateAsync(
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

  const approveImage = async () => {
    participantList[route.params.imgIndex].ImgPath = photo.uri;
    await MediaLibrary.saveToLibraryAsync(photo.uri)
    navigation.navigate("ImageScreen", {
      participantList: participantList,
      binArray: route.params.binArray,
      shotIndex: route.params.shotIndex,
      disableStart: countFilledImages(participantList)
    });
  };

  const goBack = () => {
    navigation.navigate("ImageScreen", {
      participantList: participantList,
      binArray: route.params.binArray,
      shotIndex: route.params.shotIndex
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
            <Icon.Heart width={"100%"} height={"100%"} color={"rgb(252, 190, 6)"} />
          </Pressable>
          <Pressable style={styles.cancelButton} onPress={cancelPhoto}>
            <Icon.X width={30} height={30} color={"white"}></Icon.X>
          </Pressable>
        </View>
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
              backgroundColor: colors.marina,
            }}
          >
            <Pressable style={styles.backButton} onPress={goBack}>
              <Icon.ChevronLeft width={30} height={30} color={"white"} />
            </Pressable>
          </View>

          <View
            style={{
              height: height - (cameraOffset + width),
              width: width,
              backgroundColor: colors.marina,
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
    alignItems: 'center',
  },

  takePhoto: {
    width: "20%",
    aspectRatio: 1,
    borderRadius: '50%',
    borderWidth: 7,
    borderColor: 'white'
  },

  cancelButton: {
    width: "15%",
    aspectRatio: 1,
    position: 'absolute',
    top: '5%',
    left: '2%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  previewContainer: {
    flex: 1,
    backgroundColor: colors.marina,
    alignItems: "center",
  },

  heartButton: {
    width: "20%",
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  backButton: {
    width: "15%",
    aspectRatio: 1,
    position: 'absolute',
    top: '25%',
    left: '1%',
    justifyContent: 'center',
    alignItems: 'center'
  }
  })
