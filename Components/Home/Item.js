import { StyleSheet, View, Text } from "react-native";

import React from "react";

export default function Item(props) {
  const checkActive = () => {
    if (props.value >= props.first && props.value <= props.second) return true;
    else return false;
  };

  return (
    <View>
      <Text style={[checkActive() ? styles.active : styles.inactive]}>
        {props.value}
      </Text>
      <Text style={[checkActive() ? styles.line : {}]}>
        {checkActive() ? "|" : ""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  active: {
    textAlign: "center",
    fontSize: 30,
    bottom: 5,
    color: colors.yellow,
  },
  inactive: {
    flex: 1,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "normal",
    color: "#bdc3c7",
  },
  line: {
    fontSize: 25,
    textAlign: "center",
    color: colors.yellow,
  },
});
