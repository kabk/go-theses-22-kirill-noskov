import { Box } from '@/design-system/primitives'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, CubicBezierLine, QuadraticBezierLine, Float } from '@react-three/drei'
import { useRef } from 'react'

function Cable({
    xStart,
    xEnd,
    yStart,
    yEnd }: {
        xStart: number,
        xEnd: number,
        yStart: number,
        yEnd: number,
    }) {
    const ref = useRef()
    // const colors = new Array(200).fill(0).map(() => [96, 44, 32])
    // useFrame(() => ref.current.setPoints([-20, yStart, -5], [20, yEnd, 5], [0, -3, -10]), [])
    return <QuadraticBezierLine
        start={[xStart, yStart, 0]}
        end={[xEnd, yEnd, 0]}
        // mid={[0, 0, 0]}
        // midA={[xStart / 2 + 0.3, yStart, 0]}

        // segments={200}
        color="#ffffff"
        ref={ref}
        lineWidth={8}
    />
}

const Three = () => {

    return (
        <Box css={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0, left: 0
        }}>
            <Canvas >
                <ambientLight intensity={0.15} />
                <Float
                    speed={2} // Animation speed, defaults to 1
                    rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
                    floatIntensity={0} // Up/down float intensity, defaults to 1
                >
                    <Cable yStart={5} yEnd={-10}
                        xStart={-100} xEnd={0} />
                    <Cable
                        yStart={50} yEnd={0}
                        xStart={-50} xEnd={0} />
                </Float>

                <Float
                    speed={2} // Animation speed, defaults to 1
                    rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
                    floatIntensity={0} // Up/down float intensity, defaults to 1
                >
                    <Cable yStart={0} yEnd={50}
                        xStart={0} xEnd={100} />
                </Float>
                <Cable yStart={0} yEnd={-50}
                    xStart={0} xEnd={100} />

            </Canvas>
        </Box >
    )
}

export default Three