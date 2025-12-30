<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { stateBet } from 'state-shared';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import CosmicLabel from './CosmicLabel.svelte';

	const balanceTween = new Tween(stateBet.balanceAmount);
	const label = 'BALANCE';
	const value = $derived(numberToCurrencyString(balanceTween.current));

	$effect(() => {
		balanceTween.set(stateBet.balanceAmount);
	});
</script>

<CosmicLabel {label} {value} />
