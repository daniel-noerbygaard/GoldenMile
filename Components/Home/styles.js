import { StyleSheet } from "react-native";
import { colors } from "../../Utility/enums";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
      backgroundColor: colors.bordeaux,
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
      color: colors.yellow
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
      borderTopColor: colors.yellow,
      borderBottomColor: colors.yellow,
      borderRightColor: colors.bordeaux,
      borderLeftColor: colors.bordeaux,
      borderWidth: 2
    },

    numbers: {
      color: colors.yellow,
      fontSize: 22
    },

    selector: {
      borderRadius: '50%',
      borderWidth: 4,
      borderColor: colors.yellow,
      position: 'absolute',
    },

    shotsHeader: {
      marginTop: 10,
      fontSize: '45px',
      color: colors.yellow,
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
      borderColor: colors.yellow,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },

    dropdownText: {
      color: colors.yellow,
      fontSize: 22
    },

    scrollViewContainer: {
      width: '100%',
      height: 140,
      backgroundColor: colors.bordeaux,
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.7,
      shadowRadius: 3
    },

    scrollView: { 
      width: '100%',    
      borderColor: colors.yellow,
    },

    itemButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      width: '80%',
      borderBottomColor: colors.yellow,
      borderBottomWidth: 1,     
      zIndex: 1 
    },

    itemText: {
      color: colors.yellow,
      fontSize: 20
    },

    addButton: {
      width: '25%',
      aspectRatio: 1,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: colors.yellow,
      bottom: '5%',
      position: 'absolute'
    },

    addButtonText: {
      fontSize: 45,
      color: colors.yellow      
    },
  })