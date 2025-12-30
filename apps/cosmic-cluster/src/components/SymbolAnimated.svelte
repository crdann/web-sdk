<script lang="ts">
	import { AnimatedSprite } from 'pixi-svelte';
	import { SYMBOL_SIZE } from '../game/constants';
	import * as PIXI from 'pixi.js';
	import { onMount } from 'svelte';

	type Props = {
		videoId: string; // '1', '4', '7', '8', '9'
		frameCount?: number;
		x?: number;
		y?: number;
		loop?: boolean;
		oncomplete?: () => void;
		sizeRatios?: { width: number; height: number };
	};

	const props: Props = $props();
	
	let textures = $state<PIXI.Texture[]>([]);
	let isLoaded = $state(false);
	
	// Calculate size based on SYMBOL_SIZE and ratios
	const width = $derived(SYMBOL_SIZE * (props.sizeRatios?.width ?? 1));
	const height = $derived(SYMBOL_SIZE * (props.sizeRatios?.height ?? 1));

	// Animation speed: faster since we're doubling frames for ping-pong
	const animationSpeed = 0.7;
	
	// Total frames (default 145 from extracted videos)
	const frameCount = props.frameCount ?? 145;

	onMount(async () => {
		try {
			// Generate frame URLs
			const frameUrls: string[] = [];
			for (let i = 1; i <= frameCount; i++) {
				const paddedNum = String(i).padStart(3, '0');
				frameUrls.push(`/symbols/anim_${props.videoId}/${props.videoId}_${paddedNum}.png`);
			}
			
			// Load all textures
			const loadedTextures = await Promise.all(
				frameUrls.map(url => PIXI.Assets.load<PIXI.Texture>(url))
			);
			
			// Create ping-pong effect: forward + reverse (skip first and last to avoid duplicate frames)
			const reverseTextures = [...loadedTextures].reverse().slice(1, -1);
			const pingPongTextures = [...loadedTextures, ...reverseTextures];
			
			textures = pingPongTextures;
			isLoaded = true;
		} catch (error) {
			console.error(`Failed to load animation frames for video ${props.videoId}:`, error);
		}
	});
</script>

{#if isLoaded && textures.length > 0}
	<AnimatedSprite
		{textures}
		x={props.x ?? 0}
		y={props.y ?? 0}
		{width}
		{height}
		anchor={{ x: 0.5, y: 0.5 }}
		{animationSpeed}
		loop={props.loop ?? true}
		play={true}
		onComplete={props.oncomplete}
	/>
{/if}

