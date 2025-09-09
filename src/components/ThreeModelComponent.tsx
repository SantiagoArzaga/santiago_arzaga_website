import * as React from'react'
import {useLoader, useFrame, useThree, Canvas} from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

function Box() {
    const boxRef = useRef<Mesh>(null!)

    useFrame(() => {
        boxRef.current.rotation.x += 0.005;
        boxRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={boxRef}>
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color="#8ea091" />
        </mesh>
    )

}

export default function ThreeModelComponent() {
     return (
         <Canvas className=''>
             <ambientLight/>
             <pointLight position={[1,1,1]}/>
             <Box />
         </Canvas>
     )
}

