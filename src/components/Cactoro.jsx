import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

export function Cactoro({ hovered, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Cactoro.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const anim = hovered ? "Dance" : "Idle";
    actions[anim].reset().fadeIn(0.5).play();
    return () => actions[anim].fadeOut(0.5);
  }, [hovered]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Body} />
          <primitive object={nodes.Head} />
          <group name="Cactoro_Blob">
            <skinnedMesh
              name="Cube146"
              geometry={nodes.Cube146.geometry}
              material={materials.Cactoro_Main}
              skeleton={nodes.Cube146.skeleton}
            />
            <skinnedMesh
              name="Cube146_1"
              geometry={nodes.Cube146_1.geometry}
              material={materials.Cactoro_Secondary}
              skeleton={nodes.Cube146_1.skeleton}
            />
          </group>
          <group name="Cactoro_Blob001">
            <skinnedMesh
              name="Cube000"
              geometry={nodes.Cube000.geometry}
              material={materials.Cactoro_Main}
              skeleton={nodes.Cube000.skeleton}
            />
            <skinnedMesh
              name="Cube000_1"
              geometry={nodes.Cube000_1.geometry}
              material={materials.Cactoro_Secondary}
              skeleton={nodes.Cube000_1.skeleton}
            />
            <skinnedMesh
              name="Cube000_2"
              geometry={nodes.Cube000_2.geometry}
              material={materials.Cactoro_Red}
              skeleton={nodes.Cube000_2.skeleton}
            />
            <skinnedMesh
              name="Cube000_3"
              geometry={nodes.Cube000_3.geometry}
              material={materials.Eye_Black}
              skeleton={nodes.Cube000_3.skeleton}
            />
            <skinnedMesh
              name="Cube000_4"
              geometry={nodes.Cube000_4.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Cube000_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Cactoro.gltf");
