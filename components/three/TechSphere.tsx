'use client';

import { useInView, useReducedMotion } from 'motion/react';
import React, { useEffect, useMemo, useRef } from 'react';

type SphereItem = { name: string; Icon: React.ComponentType<{ className?: string }>; group: string };

interface TechSphereProps {
	items: SphereItem[];
	highlight?: string;
}

// Rotating 3D sphere of tech icons. Points sit on a Fibonacci sphere and are projected each
// frame, so labels always face the viewer; dragging spins it.
const TechSphere = ({ items, highlight }: TechSphereProps) => {
	const container = useRef<HTMLDivElement>(null);
	const nodes = useRef<(HTMLDivElement | null)[]>([]);
	const inView = useInView(container);
	const reduced = useReducedMotion();
	const velocity = useRef({ x: 0.0025, y: 0.004 });
	const rotation = useRef({ x: 0.3, y: 0 });
	const drag = useRef<{ x: number; y: number } | null>(null);

	const points = useMemo(() => {
		const n = items.length;
		const golden = Math.PI * (3 - Math.sqrt(5));
		return items.map((_, i) => {
			const y = 1 - (i / (n - 1)) * 2;
			const r = Math.sqrt(1 - y * y);
			const theta = golden * i;
			return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
		});
	}, [items]);

	useEffect(() => {
		if (!inView) return;
		let frame = 0;

		const tick = () => {
			const el = container.current;
			if (el) {
				const radius = el.clientWidth * 0.38;
				if (!drag.current && !reduced) {
					rotation.current.x += velocity.current.x;
					rotation.current.y += velocity.current.y;
					// ease any drag-fling back to the idle speed
					velocity.current.x += (0.0025 - velocity.current.x) * 0.02;
					velocity.current.y += (0.004 - velocity.current.y) * 0.02;
				}
				const { x: rx, y: ry } = rotation.current;
				const [cx, sx, cy, sy] = [Math.cos(rx), Math.sin(rx), Math.cos(ry), Math.sin(ry)];

				points.forEach((p, i) => {
					const node = nodes.current[i];
					if (!node) return;
					// rotate around Y then X
					const x1 = p.x * cy + p.z * sy;
					const z1 = -p.x * sy + p.z * cy;
					const y2 = p.y * cx - z1 * sx;
					const z2 = p.y * sx + z1 * cx;
					const depth = (z2 + 1) / 2; // 0 = back, 1 = front
					const scale = 0.55 + depth * 0.65;
					node.style.transform = `translate(-50%, -50%) translate3d(${x1 * radius}px, ${y2 * radius}px, 0) scale(${scale})`;
					node.style.opacity = String(0.15 + depth * 0.85);
					node.style.zIndex = String(Math.round(depth * 100));
					node.style.filter = depth < 0.35 ? 'blur(1.5px)' : 'none';
				});
			}
			frame = requestAnimationFrame(tick);
		};

		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [inView, points, reduced]);

	const onPointerDown = (e: React.PointerEvent) => {
		drag.current = { x: e.clientX, y: e.clientY };
		(e.target as HTMLElement).setPointerCapture?.(e.pointerId);
	};
	const onPointerMove = (e: React.PointerEvent) => {
		if (!drag.current) return;
		const dx = e.clientX - drag.current.x;
		const dy = e.clientY - drag.current.y;
		rotation.current.y += dx * 0.006;
		rotation.current.x -= dy * 0.006;
		velocity.current = { x: -dy * 0.0008, y: dx * 0.0008 };
		drag.current = { x: e.clientX, y: e.clientY };
	};
	const onPointerUp = () => (drag.current = null);

	return (
		<div
			ref={container}
			onPointerDown={onPointerDown}
			onPointerMove={onPointerMove}
			onPointerUp={onPointerUp}
			onPointerCancel={onPointerUp}
			className="relative mx-auto aspect-square w-full max-w-[34rem] cursor-grab touch-pan-y select-none active:cursor-grabbing"
		>
			{/* glowing core + wireframe rings */}
			<div aria-hidden className="absolute inset-[22%] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),rgba(167,139,250,0.08)_50%,transparent_70%)] blur-xl" />
			<div aria-hidden className="absolute inset-[12%] rounded-full border border-white/[0.06]" />
			<div aria-hidden className="absolute inset-[12%] rounded-full border border-white/[0.06] [transform:rotateX(70deg)]" />
			<div aria-hidden className="absolute inset-[12%] rounded-full border border-white/[0.06] [transform:rotateY(70deg)]" />

			{items.map(({ name, Icon, group }, i) => {
				const lit = group === highlight;
				return (
					<div
						key={`${group}-${name}`}
						ref={(el) => {
							nodes.current[i] = el;
						}}
						className="absolute left-1/2 top-1/2 will-change-transform"
					>
						<div
							className={`flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2 py-1 text-[10px] backdrop-blur-md sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs transition-colors duration-500 ${
								lit ? 'border-emerald-400/60 bg-emerald-400/15 text-white shadow-[0_0_24px_-4px_rgba(52,211,153,0.7)]' : 'border-white/10 bg-white/[0.04] text-white/70'
							}`}
						>
							<Icon className="h-3 w-3 sm:h-4 sm:w-4" />
							{name}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TechSphere;
