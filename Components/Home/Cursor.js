import React from "react";
import { styles } from "./styles";
import { useRef } from "react";
import { Animated, PanResponder } from "react-native";
import { findSmallestDifference } from "./utils";

export default function Cursor(props) {
  const selector = useRef(
    new Animated.Value(props.numberCoordinates[3] - props.SELECTOR_RADIUS)
  ).current;
  const selectorResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        selector.setOffset(selector._value);
      },
      onPanResponderMove: (event, gesture) => {
        selector.setValue(gesture.dx);
      },
      onPanResponderRelease: (event, gesture) => {
        const x_release = findSmallestDifference(
          gesture.moveX - props.SELECTOR_RADIUS,
          props.numberCoordinates
        );
        const dx_release = x_release - props.SELECTOR_RADIUS - selector._offset;
        selector.setValue(dx_release);
        selector.flattenOffset();
        props.setParticipants(props.numberCoordinates.indexOf(x_release) + 2);
      },
    })
  ).current;

  return (
    <Animated.View
      {...selectorResponder.panHandlers}
      style={[
        styles.selector,
        { width: props.SELECTOR_DIAMETER, height: props.SELECTOR_DIAMETER },
        {
          transform: [
            {
              translateX: selector.interpolate({
                inputRange: props.range,
                outputRange: props.range,
                extrapolate: "clamp",
              }),
            },
          ],
        },
      ]}
    />
  );
}
