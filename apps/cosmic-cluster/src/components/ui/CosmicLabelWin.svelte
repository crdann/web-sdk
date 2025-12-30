<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { stateBet } from 'state-shared';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import CosmicLabel from './CosmicLabel.svelte';

	const winTween = new Tween(stateBet.winBookEventAmount);
	const label = 'WIN';
	const value = $derived(numberToCurrencyString(winTween.current));

	$effect(() => {
		winTween.set(stateBet.winBookEventAmount);
	});
</script>

<CosmicLabel {label} {value} />
