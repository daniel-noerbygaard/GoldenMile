import { Text, View, Pressable, Image } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { styles } from "./styles";
import { Camera } from "expo-camera";

export default function ImageScreen({route}){
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState()
  participants = [...Array(route.params.participants).keys()]

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

  let takePicture = async () => {
    const options = {
        quality: 1,
        base64: true,
        exif: false
    }

    setPhoto(await cameraRef.current.takePictureAsync(options))
  }

  if (photo){
    return <Image style={styles.preview} source={{uri: "data:image/jpg;base64,"+photo.base64}}/>
  }

  return (
    <View style={styles.container}>
      {participants.map(particap => (
        <View style={styles.participantContainer}></View>
      ))}
      {/* <Camera style={styles.camera} ref={cameraRef}>
      <Pressable style={styles.button} onPress={takePicture} />
      </Camera> */}
    </View>
  );
};