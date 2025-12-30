<script lang="ts">
	import type { Snippet } from 'svelte';
	import { EnableSpaceHold } from 'components-shared';
	import { getContextLayout } from 'utils-layout';
	import { Container } from 'pixi-svelte';

	import CosmicLayoutDesktop from './CosmicLayoutDesktop.svelte';

	type Props = {
		gameName: Snippet;
		logo: Snippet;
	};

	const props: Props = $props();
	const { stateLayoutDerived } = getContextLayout();
</script>

<EnableSpaceHold />

<Container>
	<CosmicLayoutDesktop gameName={props.gameName} logo={props.logo} />
</Container>
