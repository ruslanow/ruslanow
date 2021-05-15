import React, {useRef} from "react";
import {useFrame} from "@react-three/fiber";

let Cube = (p) => {

    let m = useRef(null);
    useFrame(() => (m.current.rotation.y += 0.01));

    return(
        <mesh position={p.position} ref={m}>
            <coneBufferGeometry attach='geometry' args={[10, 40, 60]} />
            <meshStandardMaterial attach='material' color='red'/>
        </mesh>

    )
}

export default Cube;