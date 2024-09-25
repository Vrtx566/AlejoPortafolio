import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const Cube = () => {


    return (
        <Box args={[3, 3, 3]} >
            <meshStandardMaterial color="orange" />
        </Box>
    );
};

export default Cube;