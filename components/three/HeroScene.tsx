'use client';

import { Environment, Float, Lightformer, MeshDistortMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useInView } from 'motion/react';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

import { levels } from '@/content/site';

// Each AI level is an orbit around the core; higher levels sit further out and tilt more
const orbits = levels.map((l, i) => ({
	color: l.color,
	radius: 1.6 + i * 0.3,
	tilt: [0.35 + i * 0.32, i * 0.9, 0.2 * i] as [number, number, number],
	speed: 0.55 - i * 0.07,
	offset: i * 1.3,
}));

function Orbit({ color, radius, tilt, speed, offset }: (typeof orbits)[number]) {
	const packet = useRef<THREE.Group>(null);
	const trail = useRef<THREE.Mesh>(null);

	useFrame(({ clock }) => {
		const t = clock.getElapsedTime() * speed + offset;
		packet.current?.position.set(Math.cos(t) * radius, Math.sin(t) * radius, 0);
		if (trail.current) trail.current.rotation.z = t;
	});

	return (
		<group rotation={tilt}>
			{/* Hairline ring */}
			<mesh>
				<torusGeometry args={[radius, 0.004, 8, 200]} />
				<meshBasicMaterial color={color} transparent opacity={0.35} />
			</mesh>

			{/* Glowing arc that follows the packet */}
			<mesh ref={trail}>
				<torusGeometry args={[radius, 0.012, 8, 120, Math.PI * 0.35]} />
				<meshBasicMaterial color={color} transparent opacity={0.9} blending={THREE.AdditiveBlending} />
			</mesh>

			{/* Data packet */}
			<group ref={packet}>
				<mesh>
					<sphereGeometry args={[0.055, 24, 24]} />
					<meshBasicMaterial color="white" />
				</mesh>
				<mesh>
					<sphereGeometry args={[0.11, 24, 24]} />
					<meshBasicMaterial color={color} transparent opacity={0.35} blending={THREE.AdditiveBlending} depthWrite={false} />
				</mesh>
			</group>
		</group>
	);
}

// small deterministic PRNG so the particle layout is stable across renders
const mulberry32 = (seed: number) => () => {
	seed |= 0;
	seed = (seed + 0x6d2b79f5) | 0;
	let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
	t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
	return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

function Particles({ count = 1400 }) {
	const ref = useRef<THREE.Points>(null);

	const positions = useMemo(() => {
		const random = mulberry32(42);
		const arr = new Float32Array(count * 3);
		for (let i = 0; i < count; i++) {
			// distribute in a thick spherical shell
			const r = 3.4 + random() * 4;
			const theta = random() * Math.PI * 2;
			const phi = Math.acos(2 * random() - 1);
			arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
			arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
			arr[i * 3 + 2] = r * Math.cos(phi);
		}
		return arr;
	}, [count]);

	useFrame((_, delta) => {
		if (ref.current) {
			ref.current.rotation.y += delta * 0.02;
			ref.current.rotation.x += delta * 0.005;
		}
	});

	return (
		<points ref={ref}>
			<bufferGeometry>
				<bufferAttribute attach="attributes-position" args={[positions, 3]} />
			</bufferGeometry>
			<pointsMaterial size={0.018} color="#9fb4ff" transparent opacity={0.7} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
		</points>
	);
}

function Core() {
	const mesh = useRef<THREE.Mesh>(null);
	const shell = useRef<THREE.Mesh>(null);

	useFrame((_, delta) => {
		if (mesh.current) {
			mesh.current.rotation.y += delta * 0.15;
			mesh.current.rotation.x += delta * 0.05;
		}
		if (shell.current) {
			shell.current.rotation.y -= delta * 0.08;
			shell.current.rotation.z += delta * 0.04;
		}
	});

	return (
		<Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
			<mesh ref={mesh}>
				<icosahedronGeometry args={[1, 64]} />
				<MeshDistortMaterial
					color="#1c2748"
					roughness={0.35}
					metalness={0.15}
					envMapIntensity={1.4}
					iridescence={1}
					iridescenceIOR={1.6}
					iridescenceThicknessRange={[200, 900]}
					clearcoat={1}
					clearcoatRoughness={0.45}
					distort={0.32}
					speed={1.6}
				/>
			</mesh>
			{/* neural wireframe shell */}
			<mesh ref={shell} scale={1.32}>
				<icosahedronGeometry args={[1, 2]} />
				<meshBasicMaterial color="#7dd3fc" wireframe transparent opacity={0.12} />
			</mesh>
		</Float>
	);
}

// Rotates the whole rig toward the pointer and pushes it back as the page scrolls
function Rig({ children }: { children: React.ReactNode }) {
	const group = useRef<THREE.Group>(null);

	useFrame(({ pointer }, delta) => {
		const g = group.current;
		if (!g) return;
		const scroll = typeof window !== 'undefined' ? Math.min(window.scrollY / window.innerHeight, 1.5) : 0;
		g.rotation.y = THREE.MathUtils.damp(g.rotation.y, pointer.x * 0.35 + scroll * 0.8, 3, delta);
		g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -pointer.y * 0.25 + scroll * 0.3, 3, delta);
		g.position.y = THREE.MathUtils.damp(g.position.y, scroll * 1.2, 4, delta);
	});

	return <group ref={group}>{children}</group>;
}

export default function HeroScene() {
	const wrapper = useRef<HTMLDivElement>(null);
	// stop rendering when the hero is off-screen
	const visible = useInView(wrapper, { margin: '200px' });

	return (
		<div ref={wrapper} className="absolute inset-0">
			<Canvas
				frameloop={visible ? 'always' : 'never'}
				camera={{ position: [0, 0, 8.5], fov: 42 }}
				dpr={[1, 1.75]}
				gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
			>
				<ambientLight intensity={0.3} />
				<Rig>
					<Core />
					{orbits.map((o, i) => (
						<Orbit key={i} {...o} />
					))}
					<Particles />
				</Rig>

				{/* Studio lighting built from emissive panels: no external HDR download */}
				<Environment resolution={256}>
					<Lightformer form="circle" intensity={2.5} color="#34d399" position={[-6, 1, 2]} scale={9} />
					<Lightformer form="circle" intensity={2.5} color="#22d3ee" position={[6, -2, 2]} scale={9} />
					<Lightformer form="circle" intensity={3} color="#a78bfa" position={[0, 6, -3]} scale={8} />
					<Lightformer form="circle" intensity={2} color="#f472b6" position={[0, -6, 1]} scale={8} />
					<Lightformer form="rect" intensity={1.2} color="#ffffff" position={[0, 0, 7]} scale={[12, 4, 1]} />
				</Environment>
			</Canvas>
		</div>
	);
}
