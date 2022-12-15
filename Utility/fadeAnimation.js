import { Animated } from "react-native";
export class Animation {
  constructor(ref) {
    this.ref = ref;
  }

  get InterpolateTransparency() {
    return this.ref.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0],
    });
  }

  get InterpolateZ() {
    this.ref.interpolate({
      inputRange: [0, 0.0001, 0.9999, 1],
      outputRange: [0, 2, 2, 0],
    });
  }

  get AnimateInstance() {
    return {
      zIndex: this.InterpolateZ,
      opacity: this.InterpolateTransparency,
    };
  }

  startAnimation = (duration) => {
    Animated.timing(this.ref, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start(() => this.ref.setValue(0));
  };
}
