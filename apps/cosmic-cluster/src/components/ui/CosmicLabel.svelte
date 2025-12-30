<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { WHITE } from 'constants-shared/colors';

	type Props = {
		label: string;
		value: string;
	};

	const props: Props = $props();

	// Define font size locally since it's not exported from components-ui-pixi
	const FONT_SIZE = 24;

	const labelStyle = {
		fontFamily: 'proxima-nova',
		fontSize: FONT_SIZE * 0.9,
		fontWeight: '600',
		fill: WHITE,
	} as const;

	const valueStyle = {
		fontFamily: 'proxima-nova',
		fontSize: FONT_SIZE * 1.1,
		fontWeight: '700',
		fill: WHITE,
	} as const;
</script>

<!-- Text only, no background - sits on top of custom background design -->
<Text anchor={{ x: 0.5, y: 0 }} text={props.label} style={labelStyle} />
<Text anchor={{ x: 0.5, y: 0 }} text={props.value} style={valueStyle} y={FONT_SIZE} />
