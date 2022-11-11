import React from "react";
import { View, Image, Text } from "react-native";
import Swiper from "react-native-swiper";
import { styles } from "./styles";

export default function SwipeComponent() {
  return (
    <View style={styles.swipeContainer}>
      <Swiper style={styles.wrapper}>
        <Image
          style={styles.swipeImage}
          source={require("../../assets/arnbitter.png")}
        />
        <Image
          style={styles.swipeImage}
          source={require("../../assets/arnbitter.png")}
        />
      </Swiper>
    </View>
  );
}
