import { styles } from "./styles";
import { View, Image, Text, Dimensions, Pressable } from "react-native";
import { useState, useEffect } from "react";
import Cursor from "./Cursor";
import Dropdown from "./Dropdown";
import SwipeComponent from "./SwipeComponent";
import SwipeComponent2 from "./SwipeComponent2";
import { Participant } from "../../Participant";
import { createShotArray } from "../../utils";

export default function HomeScreen({ navigation }) {
  const { width } = Dimensions.get("window");
  const SLIDER_WIDTH = width - 40;
  const SELECTOR_DIAMETER = 60;
  const SELECTOR_RADIUS = SELECTOR_DIAMETER * 0.5;
  const [participants, setParticipants] = useState(5);
  const [participantCoordinates, setParticipantCoordinates] = useState([]);
  const [listItems, setListItems] = useState(
    Array.from(Array(participants).keys())
  );
  const [numShots, setNumShots] = useState(0);
  const [shotIndex, setShotIndex] = useState(0);

  useEffect(() => {
    setListItems(Array.from(Array(participants).keys()));
  }, [participants]);

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

  const initCrawl = () => {
    const participantList = [...Array(participants)].map(
      (_, i) => new Participant(i)
    );
    navigation.navigate("ImageScreen", {
      participantList: participantList,
      binArray: createShotArray(numShots, participants),
      shotIndex: shotIndex
    });
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
            setParticipants={setParticipants}
          />
        )}
      </View>
      <Text style={styles.shotsHeader}>Shots</Text>
      <Dropdown listItems={listItems} setNumShots={setNumShots} />
      <SwipeComponent setShotIndex={setShotIndex} />
      {/* <SwipeComponent2 setShotIndex={setShotIndex} width={width}/> */}
      <Pressable style={styles.goButton} onPress={initCrawl}>
        <Text style={styles.goButtonText}>Go</Text>
      </Pressable>
    </View>
  );
}
