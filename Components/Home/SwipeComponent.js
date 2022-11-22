import React from "react";
import { View, Image, Text } from "react-native";
import Swiper from "react-native-swiper";
import { styles } from "./styles";

export default function SwipeComponent(props) {
  return (
    <View style={styles.swipeContainer}>
      <Swiper
        style={styles.wrapper}
        onIndexChanged={(index) => props.setShotIndex(index)}
      >
        <Image
          style={styles.swipeImage}
          source={require("../../assets/arnbitter.png")}
        />
        <Image
          style={styles.swipeImage}
          source={require("../../assets/tequila.png")}
        />
        <Image
          style={styles.swipeImage}
          source={require("../../assets/sambuca.png")}
        />
        <Image
          style={styles.swipeImage}
          source={require("../../assets/vodka.jpg")}
        />
      </Swiper>
    </View>
  );
}
