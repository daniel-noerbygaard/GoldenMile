import { Dimensions, View, Text, Image } from "react-native";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import React from "react";
import { Pressable } from "react-native";
import { styles } from "./styles";
import * as Icon from "react-native-feather";

export default function CameraComponent({ navigation, route }) {
  const { height, width } = Dimensions.get("window");
  const participantList = route.params.participantList;
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState();

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
      base64: true,
      exif: false,
    };

    setPhoto(await cameraRef.current.takePictureAsync(options));
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
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <Pressable style={styles.cancelButton} onPress={cancelPhoto}>
          <Icon.X width={30} height={30} color={"white"}></Icon.X>
        </Pressable>
      </>
    );
  } else
    return (
      <>
        <Camera style={styles.camera} ref={cameraRef}>
          <View
            style={{
              height: 0.5 * height - 0.5 * width,
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
              height: 0.5 * height - 0.5 * width,
              width: width,
              backgroundColor: "black",
              top: "75%",
              position: "absolute",
              alignItems: 'center'
            }}
          >
            <Pressable style={styles.takePhoto} onPress={takePhoto} />
          </View>
        </Camera>
      </>
    );
}
