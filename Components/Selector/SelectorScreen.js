import React, { useRef, useState } from "react";
import { styles } from "./styles";
import { View, Pressable, Text, Dimensions, Animated } from "react-native";
import SpinWheel from "./SpinWheel";
import { calcRotationDegrees, getImageIndex } from "../../utils";

export default function SelectorScreen({ route }) {
  const { width, height } = Dimensions.get("window");
  const SPINBUTTON_DIAMETER = 0.26 * width;
  const SPINBUTTON_RADIUS = 0.5 * SPINBUTTON_DIAMETER;
  const [buttonText, setButtonText] = useState("SPIN");
  const [updates, setUpdates] = useState(0);
  const [participantList, setParticipantList] = useState(
    route.params.participantList
  );
  const binArray = route.params.binArray;
  const shotIndex = route.params.shotIndex;
  const rotateAnimation = useRef(new Animated.Value(0)).current;
  const imgAnimation = useRef(new Animated.Value(0)).current;
  const [rotationDegrees, setRotationDegrees] = useState(calcRotationDegrees);
  debugger;

  const handlePress = () => {
    if (buttonText == "SPIN") {
      imgAnimation.setValue(0);
      setRotationDegrees(calcRotationDegrees);
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      }).start(() => {
        setButtonText("UPDATE");
        if (binArray[updates] === 1) {
          Animated.timing(imgAnimation, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true,
          }).start();
        }
      });
    } else if (buttonText == "UPDATE") {
      const indexToRemove = getImageIndex(
        rotationDegrees,
        participantList.length
      );
      setParticipantList(participantList.filter((_, i) => i !== indexToRemove));
      setUpdates((prev) => prev + 1);
      rotateAnimation.setValue(0);
      setButtonText("SPIN");
    }
  };

  const switchCase = () => {
    switch (shotIndex) {
      case 0:
        return require("../../assets/arnbitter.png");
      case 1:
        return require("../../assets/tequila.png");
      case 2:
        return require("../../assets/sambuca.png");
      case 3:
        return require("../../assets/vodka.jpg");
    }
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", rotationDegrees],
  });

  const interpolateTransparency = imgAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });

  const interpolateZ = imgAnimation.interpolate({
    inputRange: [0, 0.0001, 0.9999, 1],
    outputRange: [0, 2, 2, 0],
  });

  const animateRotation = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  const animateImage = {
    zIndex: interpolateZ,
    opacity: interpolateTransparency,
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
        style={[
          styles.spinButton,
          {
            width: SPINBUTTON_DIAMETER,
            left: width / 2 - SPINBUTTON_RADIUS,
            height: SPINBUTTON_DIAMETER,
            top: height / 2 - SPINBUTTON_RADIUS,
          },
        ]}
      >
        <Text style={styles.spinButtonText}>{buttonText}</Text>
      </Pressable>
      <View style={styles.triangle}></View>
      <Animated.View style={[styles.spinWheelContainer, animateRotation]}>
        <SpinWheel participantList={participantList} />
      </Animated.View>
      <Animated.Image
        style={[styles.shotImage, animateImage]}
        source={switchCase()}
      />
    </View>
  );
}
