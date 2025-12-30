<script lang="ts">
	import { Rectangle, Sprite } from 'pixi-svelte';
	import { getContext } from '../game/context';

	const context = getContext();

	// Get canvas dimensions for full-screen background - use reactive getter
	$: canvasSizes = context.stateLayoutDerived.canvasSizes();
</script>

<Rectangle {...context.stateLayoutDerived.canvasSizes()} backgroundColor={0x000000} zIndex={-3} />

<!-- Static cosmic background - positioned at origin and scaled to fill canvas -->
<Sprite
	key="cosmicBackground"
	x={0}
	y={0}
	width={canvasSizes.width}
	height={canvasSizes.height}
	zIndex={-2}
/>
