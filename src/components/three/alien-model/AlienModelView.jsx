import { PerspectiveCamera, View } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "@/components/ui/animation/loader";
import Alien from "../ModelJSX/Alien.jsx";

const AlienModelView = ({ item, mode, changeAnimation, modelRef, modelWrapperRef }) => {
  return (
    <View className="w-full h-full absolute">
      <PerspectiveCamera
        makeDefault
        position={[0, -0.2, 4.1]}
      />
      <directionalLight
        position={[2, 10, 5]}
        intensity={25} 
        color="white"
        castShadow
      />
      <directionalLight
        position={[-2, 10, -5]}
        intensity={25}
        color="white"
        castShadow
      />
      <directionalLight
        position={[0, -2, 15]}
        intensity={0}
        color="white"
        castShadow
      />
      <group ref={modelRef} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <Alien
            scale={[2.7, 2.7, 2.7]}
            item={item}
            mode={mode}
            changeAnimation={changeAnimation}
            modelRef={modelRef}
            modelWrapperRef={modelWrapperRef}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default AlienModelView;
