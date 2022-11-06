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
      color: 'rgb(252, 190, 6)',
      marginBottom: 10
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
      fontWeight: 'bold',
      fontSize: '17.5%'
    },

    selector: {
      borderRadius: '50%',
      borderWidth: 4,
      borderColor: 'rgb(252, 190, 6)',
      position: 'absolute',
    },

    shotsHeader: {
      margin: 50,
      fontSize: '45px',
      color: 'rgb(252, 190, 6)',
      marginBottom: 5
    },

    dropdownContainer: {
      width: '30%',
      height: '15%',
      alignItems: 'center',
    },

    dropdownButton: {
      width: '80%',
      height: '25%',
      borderColor: 'rgb(252, 190, 6)',
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center'
    },

    dropdownText: {
      color: 'rgb(252, 190, 6)',
      fontSize: '20%'
    },

    scrollViewContainer: {
      width: '100%',
      height: '100%',
      borderColor: 'rgb(109, 34, 41)',
      backgroundColor: 'rgb(109, 34, 41)'

    },

    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.7,
      shadowRadius: 3
    },

    scrollView: { 
      width: '100%',    
      borderColor: 'rgb(252, 190, 6)',
      // borderWidth: 2,
    },

    itemButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 30,
      width: '80%',
      borderBottomColor: 'rgb(252, 190, 6)',
      borderBottomWidth: 1
    },

    itemText: {
      color: 'rgb(252, 190, 6)',
    }
  })