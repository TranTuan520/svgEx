import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { createRef, useRef } from "react";

import Donut, {
  BACKGROUND_COLOR,
  BACKGROUND_STROKE_COLOR,
  IDonut,
} from "./Donut";

const App = () => {
  const refDonut = createRef<IDonut>();

  const onPressDonut = () => {
    const donutProgress = refDonut.current.getProgress();
    console.log(donutProgress);

    refDonut.current.run(!!donutProgress ? 0 : 90);
  };
  return (
    <View style={styles.container}>
      <Donut ref={refDonut} />
      <TouchableOpacity style={styles.startBtn} onPress={onPressDonut}>
        <Text style={styles.startBtnTitle}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  startBtn: {
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: BACKGROUND_STROKE_COLOR,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  startBtnTitle: {
    color: "#fff",
    fontWeight: "700",
  },
});
