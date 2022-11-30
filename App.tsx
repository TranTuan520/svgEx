import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { createRef, useRef } from "react";

import Donut, {
  BACKGROUND_COLOR,
  BACKGROUND_STROKE_COLOR,
  IDonut,
} from "./src/Components/Donut";
import { Ellipse, Line, Path, Polygon, Rect, Svg } from "react-native-svg";
import ExitButton from "./src/Components/ExitButton";
import MaskedViewComponent from "./src/Components/MaskedViewComponent";
import MaskedView from "@react-native-masked-view/masked-view";

const App = () => {
  const refDonut = createRef<IDonut>();

  const onPressDonut = () => {
    const donutProgress = refDonut.current.getProgress();
    console.log(donutProgress);

    refDonut.current.run(!!donutProgress ? 0 : 75);
  };
  return (
    <MaskedViewComponent />
    // <View style={styles.container}>
    //   {/* <Donut ref={refDonut} />
    //   <TouchableOpacity style={styles.startBtn} onPress={onPressDonut}>
    //     <Text style={styles.startBtnTitle}>Start</Text>
    //   </TouchableOpacity>
    //   <ExitButton /> */}
    //   {/* <Svg width={200} height={200} viewBox={`0 0 200 200`}> */}
    //   {/* <Rect width={"100%"} height={"100%"} stroke={"#fff"} />
    //     <Ellipse
    //       cx="50%"
    //       cy="50%"
    //       rx="50%"
    //       ry="50%"
    //       stroke="#fff"
    //       fill="none"
    //     /> */}
    //   {/* </Svg> */}
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: BACKGROUND_COLOR,
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
