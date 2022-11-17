import { Dimensions, View, Text, Image } from "react-native";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import React from "react";
import { Pressable } from "react-native";
import { styles } from "./styles";
import * as Icon from "react-native-feather";
import {
  manipulateAsync,
  ActionCrop,
  ActionResize,
  SaveFormat,
} from "expo-image-manipulator";

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
    ra
    tio = imgObject.width/width
    const manipResult = await manipulateAsync(
      imgObject.uri,
      [
        {
          crop: {
            height: ratio*width,
            width: ratio*width,
            originX: 0,
            originY: cameraOffset*ratio,
          },
        },
      ],
      { compress: 1 }
    );
    debugger;
    setPhoto(manipResult);
  };

  const goBack = () => {
    navigation.navigate("ImageScreen", {
      participantList: participantList,
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
              top: cameraOffset
            }}
            source={{ uri: photo.uri }}
          />
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
              backgroundColor: "black",
            }}
          >
            <Pressable style={styles.cancelButton} onPress={goBack}>
              <Icon.ChevronLeft
                width={30}
                height={30}
                color={"white"}
              ></Icon.ChevronLeft>
            </Pressable>
          </View>

          <View
            style={{
              height: height-(cameraOffset+width),
              width: width,
              backgroundColor: "black",
              top: cameraOffset + width,
              position: "absolute",
              alignItems: "center",
            }}
          >
            <Pressable style={styles.takePhoto} onPress={takePhoto} />
          </View>
        </Camera>
      </>
    );
}
