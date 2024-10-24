// src/components/Bubble.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { G } from "react-native-svg";
import Bubble1 from "@/assets/images/bubble1.svg";
import Bubble2 from "@/assets/images/bubble2.svg";
import Bubble3 from "@/assets/images/bubble3.svg";
import Bubble4 from "@/assets/images/bubble4.svg";
import Bubble5 from "@/assets/images/bubble5.svg";

type BubbleProps = {
  type: "bubble1" | "bubble2" | "bubble3" | "bubble4" | "bubble5";
  rotation?: number; // Rotación en grados (opcional)
  size?: number; // Tamaño opcional para escalar el SVG
};

export const Bubble: React.FC<BubbleProps> = ({
  type,
  rotation = 0,
  size = 100,
}) => {
  let BubbleComponent;

  switch (type) {
    case "bubble1":
      BubbleComponent = Bubble1;
      break;
    case "bubble2":
      BubbleComponent = Bubble2;
      break;
    case "bubble3":
      BubbleComponent = Bubble3;
      break;
    case "bubble4":
      BubbleComponent = Bubble4;
      break;
    case "bubble5":
      BubbleComponent = Bubble5;
      break;
    default:
      return null;
  }

  return (
    <View
      style={[
        styles.container,
        {
          transform: [{ rotate: `${rotation}deg` }],
          width: size,
          height: size,
        },
      ]}
    >
      <Svg width="100%" height="100%">
        <G>
          <BubbleComponent width="100%" height="100%" />
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
