import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
      backgroundColor: 'rgb(109, 34, 41)',
      alignItems: 'center',
      marginTop: 'auto'
    },

    banner: {
      width: '100%',
      height: '10%',
      resizeMode: 'contain',
      marginTop: 100,
      marginBottom: 30
    },

    participantHeader: {
      fontSize: '50px',
      color: 'rgb(252, 190, 6)'
    },

    slider: {
      height: 70,  
      justifyContent: 'center', 
    },

    numberContainer: {
      width: '100%',
      height: '70%',
      top: '0%',    
      alignItems: 'center',  
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      borderTopColor: 'rgb(252, 190, 6)',
      borderBottomColor: 'rgb(252, 190, 6)',
      borderRightColor: 'rgb(109, 34, 41)',
      borderLeftColor: 'rgb(109, 34, 41)',
      borderWidth: 2
    },

    numbers: {
      color: 'rgb(252, 190, 6)',
      fontSize: 22
    },

    selector: {
      borderRadius: '50%',
      borderWidth: 4,
      borderColor: 'rgb(252, 190, 6)',
      position: 'absolute',
    },

    shotsHeader: {
      marginTop: 10,
      fontSize: '45px',
      color: 'rgb(252, 190, 6)',
      marginBottom: 5
    },

    dropdownContainer: {
      width: '40%',
      height: '5%',
      alignItems: 'center',
      zIndex: 1,
    },

    dropdownButton: {
      width: '80%',
      height: '100%',
      borderColor: 'rgb(252, 190, 6)',
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },

    dropdownText: {
      color: 'rgb(252, 190, 6)',
      fontSize: 22
    },

    scrollViewContainer: {
      width: '100%',
      height: 140,
      backgroundColor: 'rgb(109, 34, 41)',
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.7,
      shadowRadius: 3
    },

    scrollView: { 
      width: '100%',    
      borderColor: 'rgb(252, 190, 6)',
    },

    itemButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      width: '80%',
      borderBottomColor: 'rgb(252, 190, 6)',
      borderBottomWidth: 1,     
      zIndex: 1 
    },

    itemText: {
      color: 'rgb(252, 190, 6)',
      fontSize: 20
    },

    swipeContainer: {
      // flex: 1,
      marginTop: 20,
      marginBottom: 20,
      width: '45%',
      height: '20%'
    },

    wrapper: {},
    swipeImage: {
      width: '100%',
      height: '90%',
      resizeMode: 'contain',
    },

    goButton: {
      width: '25%',
      aspectRatio: 1,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'rgb(252, 190, 6)',
    },

    goButtonText: {
      fontSize: 50,
      color: 'rgb(252, 190, 6)'
    },
  })