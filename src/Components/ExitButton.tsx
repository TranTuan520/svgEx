import { TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Line, Rect, Svg } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedLine = Animated.createAnimatedComponent(Line);

const ExitButton = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const line1Y1 = useSharedValue("10%");
  const line1Y2 = useSharedValue("90%");

  const line2Y1 = useSharedValue("90%");
  const line2Y2 = useSharedValue("10%");

  const line3Y1 = useSharedValue("90%");
  const line3Y2 = useSharedValue("10%");

  const line1Props = useAnimatedProps(() => ({
    y1: line1Y1.value,
    y2: line1Y2.value,
  }));

  const line2Props = useAnimatedProps(() => ({
    y1: line2Y1.value,
    y2: line2Y2.value,
  }));

  const line3Props = useAnimatedProps(() => ({
    y1: line3Y1.value,
    y2: line3Y2.value,
  }));

  const handleAnimatedLine = (toValue: string) => {
    return withTiming(toValue, {
      duration: 200,
    });
  };

  const handleOnPress = () => {
    line1Y1.value = handleAnimatedLine(isActive ? "20%" : "10%");
    line1Y2.value = handleAnimatedLine(isActive ? "20%" : "90%");

    line2Y1.value = handleAnimatedLine(isActive ? "50%" : "90%");
    line2Y2.value = handleAnimatedLine(isActive ? "50%" : "10%");

    line3Y1.value = handleAnimatedLine(isActive ? "80%" : "90%");
    line3Y2.value = handleAnimatedLine(isActive ? "80%" : "10%");

    setIsActive((prevState) => !prevState);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleOnPress}>
      <Svg width={100} height={100}>
        <Rect
          stroke={"gray"}
          width={"100%"}
          height={"100%"}
          rx={12}
          strokeWidth={4}
        />
        <AnimatedLine
          animatedProps={line1Props}
          x1={"10%"}
          x2={"90%"}
          stroke={"#fff"}
          strokeWidth={6}
        />
        <AnimatedLine
          x1={"10%"}
          x2={"90%"}
          animatedProps={line2Props}
          stroke={"#fff"}
          strokeWidth={6}
        />
        <AnimatedLine
          x1={"10%"}
          x2={"90%"}
          animatedProps={line3Props}
          stroke={"#fff"}
          strokeWidth={6}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default ExitButton;
