import { styles } from "./styles";
import { View, Image, ScrollView } from "react-native";
import React from "react";

export default function SwipeComponent2(props) {
    const swipeWidth = props.width*0.45
  return (
    <View style={[styles.swipeContainer, {width: swipeWidth}]}>
      <ScrollView
        snapToInterval={swipeWidth}
        decelerationRate="fast"
        horizontal
      >
        <Image key={0}
          style={{width: swipeWidth, height: '100%'}}
          source={require("../../assets/arnbitter.png")}
        ></Image>
        <Image key={1}
          style={{width: swipeWidth, height: '100%'}}
          source={require("../../assets/tequila.png")}
        ></Image>
      </ScrollView>
    </View>
  );
}
