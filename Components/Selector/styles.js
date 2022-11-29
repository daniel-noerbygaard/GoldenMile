import { StyleSheet } from "react-native";
import { colors } from "../../Utility/enums";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.marina,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
  },

  triangle: {
    position: "absolute",
    zIndex: 2,
    top: "24%",
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: "50%",
    borderRightWidth: "35%",
    borderBottomWidth: 0,
    borderLeftWidth: "35%",
    borderTopColor: colors.bordeaux,
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
  },

  spinButton: {
    borderRadius: "100%",
    position: "absolute",
    borderWidth: 5,
    borderColor: "rgb(66, 21, 24)",
    backgroundColor: colors.bordeaux,
    zIndex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  spinButtonText: {
    fontSize: 22,
    color: colors.yellow,
  },

  spinWheelContainer: {
    width: "100%",
    aspectRatio: 1,
  },

  shotImage: {
    position: "absolute",
    width: "50%",
    height: "50%",
  },
});
