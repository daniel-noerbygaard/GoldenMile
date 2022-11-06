import { styles } from "./styles";
import {
  View,
  Image,
  Text,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import Cursor from "./Cursor";
import Dropdown from "./Dropdown";

export default function Home(props) {
  const { width } = Dimensions.get("window");
  const SLIDER_WIDTH = width - 40;
  const SELECTOR_DIAMETER = 60;
  const SELECTOR_RADIUS = SELECTOR_DIAMETER * 0.5;

  const [participantCoordinates, setParticipantCoordinates] = useState([]);
  const [listItems, setListItems] = useState(Array.from(Array(props.participants).keys()))

  useEffect(() => {
    setListItems(Array.from(Array(props.participants).keys()))
  }, [props.participants])

  const handleOnLayout = (event, i, n) => {
    const { width, x } = event.nativeEvent.layout;
    setParticipantCoordinates((prev) =>
      [...prev, x + width / 2].sort(function (a, b) {
        return a - b; // New sorted array
      })
    ); 
  };

  const setupSlider = (n) => {
    const components = [];
    for (let i = 2; i < n + 1; i++) {
      components.push(
        <Text
          style={styles.numbers}
          key={"participant" + i}
          onLayout={(event) => handleOnLayout(event, i, n)}
        >
          {i}
        </Text>
      );
    }
    return components;
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.banner}
        source={require("../../assets/banner.png")}
      />
      <Text style={styles.participantHeader}>Participants</Text>

      <View style={[styles.slider, { width: SLIDER_WIDTH }]}>
        <View style={styles.numberContainer}>{setupSlider(10)}</View>
        {participantCoordinates.length > 8 && (
          <Cursor
            SELECTOR_DIAMETER={SELECTOR_DIAMETER}
            SELECTOR_RADIUS={SELECTOR_RADIUS}
            range={[
              participantCoordinates[0] - SELECTOR_RADIUS,
              participantCoordinates.slice(-1)[0] - SELECTOR_RADIUS,
            ]}
            numberCoordinates={participantCoordinates}
            setParticipants={props.setParticipants}
          />
        )}
      </View>
      <Text style={styles.shotsHeader}>Shots</Text>
      <Dropdown listItems = {listItems} />
      
    </View>
  );
}
