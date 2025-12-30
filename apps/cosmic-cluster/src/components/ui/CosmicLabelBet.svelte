<script lang="ts">
	import { stateBet } from 'state-shared';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import CosmicLabel from './CosmicLabel.svelte';

	const label = 'BET';
	const value = $derived(numberToCurrencyString(stateBet.betAmount));
</script>

<CosmicLabel {label} {value} />
