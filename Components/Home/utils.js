import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export const findSmallestDifference = (cursorPosition, array) => {
  let coordinate = array[0];
  let minDiff = array[1] - array[0];
  if (cursorPosition > array.slice(-1)) {
    return array.slice(-1)[0];
  } else {
    for (let i = 0; i < array.length; i++) {
      const diff = Math.abs(array[i] - cursorPosition);
      if (diff < minDiff) {
        minDiff = diff;
        coordinate = array[i];
      }
    }
    return coordinate;
  }
};
