import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04031b',
    alignItems: "center",
    justifyContent: 'center',
    marginTop: "auto"
  },

  spinButton: {
    borderRadius: '100%',
    borderColor: '#fff',
    position: 'absolute',
    marginHorizontal: 'auto',
    borderWidth: 8,
    backgroundColor: '#e2e2e2',
    zIndex: 2,
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center'
    
  },

  spinButtonText: {
    fontSize: 25,
    color: '#a2a2a2'
  },

  spinWheelContainer: {
    width: '100%',
    aspectRatio: 1,
    borderWidth: 1,
  }

});
