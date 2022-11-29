import React, { useState } from "react";
import { View, Pressable, ScrollView, Text } from "react-native";
import { styles } from "./styles";

export default function Dropdown(props) {
  const [dropDownActive, setDropDownActive] = useState(false);
  
  const dropdownActivity = () => {
    !dropDownActive ? setDropDownActive(true) : setDropDownActive(false);
  };

  return (
    <View style={styles.dropdownContainer}>
      <Pressable style={styles.dropdownButton} onPress={dropdownActivity}>
        <Text style={styles.dropdownText}>{props.buttonText}</Text>
      </Pressable>
      {dropDownActive && (
        <View style={styles.scrollViewContainer}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={{ alignItems: "center" }}
          >
            {props.listItems.map((item) => {
              return (
                <Pressable
                  style={styles.itemButton }
                  onPress={() => {
                    dropdownActivity();
                    props.setButtonText(String(item));
                    props.setNumShots(item)
                  }}
                >
                  <Text style={styles.itemText}>{item}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
