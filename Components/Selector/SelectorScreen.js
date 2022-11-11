import React, { useRef, useState } from "react";
import { styles } from "./styles";
import { View, Pressable, Text, Dimensions, Animated } from "react-native";
import SpinWheel from "./SpinWheel";
import { calcRotationDegrees } from "../Home/utils";

export default function SelectorScreen({ route }) {
  const { width, height } = Dimensions.get("window");
  const SPINBUTTON_DIAMETER = 0.25 * width;
  const SPINBUTTON_RADIUS = 0.5 * SPINBUTTON_DIAMETER;
  const [buttonText, setButtonText] = useState("SPIN");
  const [participants, setParticipants] = useState(route.params.participants);
  const rotateAnimation = useRef(new Animated.Value(0)).current;
  const [rotationDegrees, setRotationDegrees] = useState(calcRotationDegrees)

  const handlePress = () => {
    if (buttonText == "SPIN") {
      setRotationDegrees(calcRotationDegrees)
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start(() => setButtonText("UPDATE"));
    } else if (buttonText == "UPDATE") {
      rotateAnimation.setValue(0);
      setButtonText("SPIN");
    }
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", rotationDegrees],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
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
      <Animated.View style={[styles.spinWheelContainer, animatedStyle]}>
        <SpinWheel participants={participants} />
      </Animated.View>
    </View>
  );
}
