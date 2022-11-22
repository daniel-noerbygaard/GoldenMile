import { Text, View, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import * as Icon from "react-native-feather";

export default function ImageScreen({ navigation, route }) {
  const [participantList, setParticipantList] = useState(
    route.params.participantList
  );

  const handleTextChanged = (i, text) => {
    const tempArray = [...participantList];
    tempArray[i].Name = text;
    setParticipantList(tempArray);
  };

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
              placeholderTextColor={"rgb(196,148,6)"}
            ></TextInput>
            {e.ImgPath ? (
              <Pressable style={styles.participantCameraButton} disabled={true}>
                <Icon.Check width={35} height={35} color={"rgb(252, 190, 6)"} />
              </Pressable>
            ) : (
              <Pressable
                style={styles.participantCameraButton}
                onPress={() =>
                  navigation.navigate("CameraComponent", {
                    participantList: participantList,
                    binArray: route.params.binArray,
                    imgIndex: i,
                    shotIndex: route.params.shotIndex,
                  })
                }
              >
                <Icon.Camera
                  width={35}
                  height={35}
                  color={"rgb(252, 190, 6)"}
                />
              </Pressable>
            )}
          </View>
        ))}
      </View>
      <Pressable
        style={styles.goButton}
        onPress={() =>
          navigation.navigate("SelectorScreen", {
            participantList: participantList,
            binArray: route.params.binArray,
            shotIndex: route.params.shotIndex,
          })
        }
      >
        <Text style={styles.goButtonText}>Go</Text>
      </Pressable>
    </View>
  );
}
