import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import AlienModelView from "./AlienModelView";
import {
  modelScheme,
  alienCubePosition,
  cubCubePosition,
  rubikCubePosition,
} from "@/components/three/constants";
import { useState, useRef } from "react";

export const AlienModelRender = () => {
  const [selectMode, setSelectMode] = useState(alienCubePosition);
  const [changeAnimation, setChangeAnimation] = useState(false);
  const containerRef = useRef();
  const modelWrapperRef = useRef();

  const handleSelectMode = (mode) => {
    setSelectMode(mode);
    setChangeAnimation(true);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-screen fixed top-0 left-0 pointer-events-none"
    >

      <div
        className="w-100 h-100 absolute top-120 right-30"
        ref={modelWrapperRef}
      >
        <AlienModelView
          item={modelScheme[3]}
          mode={selectMode}
          changeAnimation={changeAnimation}
          modelWrapperRef={modelWrapperRef}
        />
      </div>

      <Canvas
        shadows
        eventSource={containerRef}
        className="pointer-events-none"
      >
        <View.Port />
      </Canvas>
    </div>
  );
};
