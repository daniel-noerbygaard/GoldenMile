import { Text, View, Pressable, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import * as Icon from "react-native-feather";

export default function ImageScreen({ navigation, route }) {
  const [participantList, setParticipantList] = useState(
    route.params.participantList
  );
  const [namesFilled, setNamesFilled] = useState([]);
  const emptyImages = route.params.disableStart;
  const [emptyNames, setEmptyNames] = useState(true);
    
  useEffect(() => {
    if (namesFilled.length === participantList.length){
      setEmptyNames(false)
    }
  }, [namesFilled.length])

  const handleTextChanged = (i, text) => {
    if (!namesFilled.includes(i)) {
      setNamesFilled((prev) => [...prev, i]);
    }
    const tempArray = [...participantList];
    tempArray[i].Name = text;
    setParticipantList(tempArray);
  };

  const handleNavigation = (imageOption, index) => {
    navigation.navigate(imageOption, {
      participantList: participantList,
      binArray: route.params.binArray,
      imgIndex: index,
      shotIndex: route.params.shotIndex
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Add</Text>
      </View>
      <View style={styles.participantContainer}>
        {participantList.map((e, i) => (
          <View style={styles.participantRowContainer} key={i}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => handleTextChanged(i, text)}
              value={e.Name}
              placeholder={"Name"}
              placeholderTextColor={"rgba(196,148,6,0.7)"}
            ></TextInput>            
            {e.ImgPath ? (
              <>
                <Pressable style={styles.participantImageButton} disabled={true}>
                  <Icon.Image top='3%' opacity={0.4} width={32} height={32} color={"rgb(252, 190, 6)"} />
                </Pressable>
                <Pressable style={styles.participantCameraButton} disabled={true}>
                  <Icon.Check width={35} height={35} color={"rgb(252, 190, 6)"} />
                </Pressable>
              </>
            ) : (
              <>
                <Pressable style={styles.participantImageButton} onPress={() => handleNavigation("AlbumComponent", i)}>
                  <Icon.Image top='3%' width={32} height={32} color={"rgb(252, 190, 6)"} />
                </Pressable>
                <Pressable style={styles.participantCameraButton} onPress={() => handleNavigation("CameraComponent", i)}>
                  <Icon.Camera width={35} height={35} color={"rgb(252, 190, 6)"}/>
                </Pressable>
              </>
            )}
          </View>
        ))}
      </View>
      <Pressable
        style={[
          styles.goButton,
          (!emptyImages || !emptyNames) ? { opacity: 1 } : { opacity: 0.3 },
        ]}
        disabled={(!emptyImages || !emptyNames) ? false : true}
        onPress={() =>
          navigation.navigate("SelectorScreen", {
            participantList: participantList,
            binArray: route.params.binArray,
            shotIndex: route.params.shotIndex,
          })
        }
      >
        <Text
          style={[
            styles.goButtonText,
            (!emptyImages || !emptyNames) ? { opacity: 1 } : { opacity: 0.5 },
          ]}
        >
          Go
        </Text>
      </Pressable>
    </View>
  );
}
