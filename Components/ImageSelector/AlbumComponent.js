import { StyleSheet, Dimensions, View, Text } from "react-native";
import React from "react";
import { colors } from "../../Utility/enums";

const rows = new Array(4).fill(0);
const columns = new Array(3).fill(0);
const { width, height } = Dimensions.get("window");
const IMG_SIZE = 0.32*width
const IMG_COLLECTION_HEIGHT = IMG_SIZE*4
const IMG_COLLECTION_WIDTH = IMG_SIZE*3

export default function AlbumComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Images</Text>
      </View>
      <View style={styles.collectionContainer}>
        {rows.map((row, i) => (
          <View style={styles.imgRow} key={i}>
            {columns.map((columns, j) => (
              <View style={styles.imgColumn} key={j}></View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.marina,
    alignItems: 'center',
  },

  headerContainer: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 60,
    color: colors.yellow,
    marginTop: "20%",
  },

  collectionContainer: {
    height: IMG_COLLECTION_HEIGHT,
    width: IMG_COLLECTION_WIDTH,
    top: '5%'
  },

  imgRow: {
    height: IMG_SIZE,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  imgColumn: {
    height: IMG_SIZE*0.97,
    aspectRatio: 1,
    borderWidth: 1
  }
});
