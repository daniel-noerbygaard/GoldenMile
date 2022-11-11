import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04031b',
    alignItems: "center",
    justifyContent: 'space-evenly',
    marginTop: "auto"
  },

  participantContainer: {
    height: '10%',
    width: '80%',
    borderWidth: 2,
    borderColor: 'white'
  },

  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "auto",
  },

  button: {
    width: "20%",
    aspectRatio: 1,
    backgroundColor: "white",
    bottom: '10%'
  },

  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});
