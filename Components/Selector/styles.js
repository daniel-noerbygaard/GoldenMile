import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04031b',
    alignItems: "center",
    justifyContent: 'center',
    marginTop: "auto"
  },

  triangle: {
    position: "absolute",
    zIndex: 2,
    top: "24%",
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: "50%",
    borderRightWidth: "35%",
    borderBottomWidth: 0,
    borderLeftWidth: "35%",
    borderTopColor: "rgb(109, 34, 41)",
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },

  spinButton: {
    borderRadius: '100%',
    position: 'absolute',
    borderWidth: 5,
    borderColor: "rgb(66, 21, 24)",
    backgroundColor: "rgb(109, 34, 41)",
    zIndex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  spinButtonText: {
    fontSize: 22,
    color: 'rgb(252, 190, 6)'
  },

  spinWheelContainer: {
    width: '100%',
    aspectRatio: 1,
  },

  shotImage: {
    position: 'absolute',
    width: '50%',
    height: '50%'
  }

});
