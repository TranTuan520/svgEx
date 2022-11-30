import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { forwardRef, Ref, useImperativeHandle } from "react";
import { Circle, G, Svg } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";
export const BACKGROUND_COLOR: string = "#444b6f";
export const BACKGROUND_STROKE_COLOR: string = "#303858";
const STROKE_COLOR: string = "#a6e1fa";
const CIRCLE_LENGTH: number = 400;
const R = CIRCLE_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export interface IDonut {
  run: (toProgress: number) => void;
  getProgress: () => number;
}

const Donut = forwardRef((_, ref: Ref<IDonut>) => {
  const progress = useSharedValue<number>(0);

  const circleAnimatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });

  const runningDonut = (toProgress: number) => {
    progress.value = withTiming(toProgress / 100, {
      duration: 1000,
    });
  };

  useImperativeHandle(ref, () => ({
    getProgress: () => progress.value,
    run: runningDonut,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.progressTextWrapper}>
        <ReText style={styles.progressText} text={progressText} />
        <Text style={styles.progressTextPercent}>%</Text>
      </View>
      <Svg style={{ position: "absolute" }} width={"100%"} height={"100%"}>
        <G>
          <Circle
            cx={"50%"}
            cy={"50%"}
            stroke={BACKGROUND_STROKE_COLOR}
            r={R}
            strokeWidth={30}
          />
          <AnimatedCircle
            cx={"50%"}
            cy={"50%"}
            stroke={STROKE_COLOR}
            r={R}
            strokeWidth={15}
            strokeDasharray={CIRCLE_LENGTH}
            animatedProps={circleAnimatedProps}
            strokeLinecap={"round"}
          />
        </G>
      </Svg>
    </View>
  );
});

export default Donut;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    aspectRatio: 1,
  },
  progressText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },
  progressTextPercent: {
    color: "#fff",
    fontSize: 10,
  },
  progressTextWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
  },
});
