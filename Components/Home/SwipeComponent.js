import { assets } from "../../Utility/enums";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import React from "react";

export default function SwipeComponent(props) {
  const swipeWidth = props.width * 0.4;

  return (
    <View style={[styles.swipeContainer, { width: swipeWidth }]}>
      <ScrollView
        onMomentumScrollEnd={(e) =>
          props.setShotIndex(e.nativeEvent.contentOffset.x / swipeWidth)
        }
        snapToInterval={swipeWidth}
        decelerationRate="fast"
        disableIntervalMomentum
        horizontal
        scrollEventThrottle={1}
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        {assets.map((source, i) => (
          <Image
            key={source}
            style={{ width: swipeWidth, height: "100%" }}
            {...{ source }}
          />
        ))}
      </ScrollView>
      <View
        style={[
          styles.indexContainer,
          { width: swipeWidth * 0.4, height: "4%" },
        ]}
      >
        {assets.map((_, i) => (
          <View
            key={i}
            style={[
              styles.index,
              {
                backgroundColor:
                  i === props.shotIndex
                    ? "rgba(252, 190, 6, 1)"
                    : "rgba(252, 190, 6, 0.2)",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  swipeContainer: {
    flex: 0.6,
    marginTop: 20,
    marginBottom: 15,
    alignItems: "center",
  },

  indexContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  index: {
    borderRadius: 50,
    backgroundColor: "rgba(252, 190, 6, 0.2)",
    height: "100%",
    aspectRatio: 1,
  },
});
