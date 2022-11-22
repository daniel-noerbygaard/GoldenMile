import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(109, 34, 41)',
    alignItems: "center",
    marginTop: "auto"
  },

  headerContainer: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  header: {
    fontSize: 60,
    color: 'rgb(252, 190, 6)',
    marginTop: '20%'   
  },

  participantContainer: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
  },

  participantRowContainer: {
    height: '10%',
    width: '80%',
    flexDirection: 'row',    
  },

  textInput: {
    width: '80%',
    height: '100%',
    fontSize: '30%',
    color: 'rgb(252, 190, 6)',
    paddingLeft: 10,    
    borderBottomColor: 'rgb(252, 190, 6)',
    borderBottomWidth: 2,
  },

  participantCameraButton: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  camera: {
    flex: 1,
    alignItems: 'center',
  },

  takePhoto: {
    width: "20%",
    aspectRatio: 1,
    borderRadius: '50%',
    borderWidth: 7,
    borderColor: 'white'
  },

  cancelButton: {
    width: "15%",
    aspectRatio: 1,
    position: 'absolute',
    top: '5%',
    left: '2%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  heartButton: {
    width: "20%",
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  previewContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: "center",
  },

  backButton: {
    width: "15%",
    aspectRatio: 1,
    position: 'absolute',
    top: '20%',
    left: '2%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  goButton: {
    width: '25%',
    aspectRatio: 1,
    position: 'absolute',
    bottom: '10%',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgb(252, 190, 6)',
  },

  goButtonText: {
    fontSize: 50,
    color: 'rgb(252, 190, 6)'
  },
});
