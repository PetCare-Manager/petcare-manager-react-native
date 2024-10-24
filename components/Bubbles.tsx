// src/components/Bubble.tsx
import React from "react";
import { View } from "react-native";
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
      BubbleComponent = () => <Bubble1 width={size} height={size} />;
      break;
    case "bubble2":
      BubbleComponent = () => <Bubble2 width={size} height={size} />;
      break;
    case "bubble3":
      BubbleComponent = () => <Bubble3 width={size} height={size} />;
      break;
    case "bubble4":
      BubbleComponent = () => <Bubble4 width={size} height={size} />;
      break;
    case "bubble5":
      BubbleComponent = () => <Bubble5 width={size} height={size} />;
      break;
    default:
      return null;
  }

  return (
    <View
      style={[
        { transform: [{ rotate: `${rotation}deg` }] },
        { width: size, height: size },
      ]}
      className="justify-center items-center"
    >
      {BubbleComponent && <BubbleComponent />}
    </View>
  );
};
