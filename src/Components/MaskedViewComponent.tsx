import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaskedView from "@react-native-masked-view/masked-view";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const MaskedViewComponent = () => {
  const scale = useSharedValue(1);

  const styles = useAnimatedStyle(() => ({
    width: 300,
    height: "50%",
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0, 1)",
    transform: [{ scale: scale.value }],
  }));

  return (
    <MaskedView
      style={{ flex: 1 }}
      maskElement={
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.2)",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Animated.View style={styles} />
          </View>
        </View>
      }
    >
      <View style={{ flex: 1, backgroundColor: "gray" }}>
        <Image
          source={{
            uri: "https://balancewithjess.com/wp-content/uploads/2022/07/Almond-Milk-Tea-Feat.jpg",
          }}
          style={{ flex: 1 }}
        />
      </View>
    </MaskedView>
  );
};

export default MaskedViewComponent;
