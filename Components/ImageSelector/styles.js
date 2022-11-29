import { StyleSheet } from "react-native";
import { colors } from "../../Utility/enums";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bordeaux,
    alignItems: "center",
    marginTop: "auto",
  },

  headerContainer: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 60,
    color: colors.yellow,
    marginTop: "20%",
  },

  participantContainer: {
    width: "100%",
    height: "70%",
    alignItems: "center",
  },

  participantRowContainer: {
    height: "8%",
    width: "80%",
    flexDirection: "row",
  },

  textInput: {
    width: "70%",
    height: "100%",
    fontSize: "30%",
    color: colors.yellow,
    paddingLeft: 10,
    borderBottomColor: colors.yellow,
    borderBottomWidth: 2,
  },

  participantImageButton: {
    width: "12%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "3%",
  },

  participantCameraButton: {
    width: "12%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "3%",
  },

  goButton: {
    width: "25%",
    aspectRatio: 1,
    position: "absolute",
    bottom: "5%",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.yellow,
  },

  goButtonText: {
    fontSize: 50,
    color: colors.yellow,
  },
});
