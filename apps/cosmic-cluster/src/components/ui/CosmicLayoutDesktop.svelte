<script lang="ts">
	import type { Snippet } from 'svelte';
	import { stateUi } from 'state-shared';
	import { BLACK } from 'constants-shared/colors';
	import { MainContainer } from 'components-layout';
	import { Container, Rectangle } from 'pixi-svelte';

	import { getContext } from '../../game/context';
	import { LABELS, BUTTONS, getPosition } from '../../game/uiConfig';
	import CosmicLabelBalance from './CosmicLabelBalance.svelte';
	import CosmicLabelWin from './CosmicLabelWin.svelte';
	import CosmicLabelBet from './CosmicLabelBet.svelte';

	// Import button components from SDK
	import ButtonPayTable from 'components-ui-pixi/src/components/ButtonPayTable.svelte';
	import ButtonGameRules from 'components-ui-pixi/src/components/ButtonGameRules.svelte';
	import ButtonSettings from 'components-ui-pixi/src/components/ButtonSettings.svelte';
	import ButtonBuyBonus from 'components-ui-pixi/src/components/ButtonBuyBonus.svelte';
	import ButtonBet from 'components-ui-pixi/src/components/ButtonBet.svelte';
	import ButtonTurbo from 'components-ui-pixi/src/components/ButtonTurbo.svelte';
	import ButtonAutoSpin from 'components-ui-pixi/src/components/ButtonAutoSpin.svelte';
	import ButtonIncrease from 'components-ui-pixi/src/components/ButtonIncrease.svelte';
	import ButtonDecrease from 'components-ui-pixi/src/components/ButtonDecrease.svelte';
	import ButtonMenu from 'components-ui-pixi/src/components/ButtonMenu.svelte';
	import ButtonMenuClose from 'components-ui-pixi/src/components/ButtonMenuClose.svelte';
	import ButtonSoundSwitch from 'components-ui-pixi/src/components/ButtonSoundSwitch.svelte';

	type Props = {
		gameName: Snippet;
		logo: Snippet;
	};

	const props: Props = $props();
	const context = getContext();

	// Get layout dimensions for percentage-based positioning
	const layoutWidth = $derived(context.stateLayoutDerived.mainLayoutStandard().width);
	const layoutHeight = $derived(context.stateLayoutDerived.mainLayoutStandard().height);

	// Calculate positions from config (percentage-based)
	const balancePos = $derived(getPosition(layoutWidth, layoutHeight, LABELS.balance));
	const winPos = $derived(getPosition(layoutWidth, layoutHeight, LABELS.win));
	const betPos = $derived(getPosition(layoutWidth, layoutHeight, LABELS.bet));

	const menuPos = $derived(getPosition(layoutWidth, layoutHeight, BUTTONS.menu));
	const buyBonusPos = $derived(getPosition(layoutWidth, layoutHeight, BUTTONS.buyBonus));
	const decreasePos = $derived(getPosition(layoutWidth, layoutHeight, BUTTONS.decrease));
	const increasePos = $derived(getPosition(layoutWidth, layoutHeight, BUTTONS.increase));
	const autoSpinPos = $derived(getPosition(layoutWidth, layoutHeight, BUTTONS.autoSpin));
	const buttonBetPos = $derived(getPosition(layoutWidth, layoutHeight, BUTTONS.bet));
	const turboPos = $derived(getPosition(layoutWidth, layoutHeight, BUTTONS.turbo));
	const soundPos = $derived(getPosition(layoutWidth, layoutHeight, BUTTONS.sound));
</script>

<!-- Game name top left -->
<Container x={20}>
	{@render props.gameName()}
</Container>

<!-- Logo top right -->
<Container x={context.stateLayoutDerived.canvasSizes().width - 20}>
	{@render props.logo()}
</Container>

<!-- UI Layer - all elements positioned relative to main layout -->
<MainContainer standard>
	<!-- LABELS -->
	<Container x={balancePos.x} y={balancePos.y} scale={balancePos.scale}>
		<CosmicLabelBalance />
	</Container>

	<Container x={winPos.x} y={winPos.y} scale={winPos.scale}>
		<CosmicLabelWin />
	</Container>

	<Container x={betPos.x} y={betPos.y} scale={betPos.scale}>
		<CosmicLabelBet />
	</Container>

	<!-- BUTTONS -->
	<Container x={menuPos.x} y={menuPos.y} scale={menuPos.scale}>
		<ButtonMenu anchor={0.5} />
	</Container>

	<Container x={buyBonusPos.x} y={buyBonusPos.y} scale={buyBonusPos.scale}>
		<ButtonBuyBonus anchor={0.5} />
	</Container>

	<Container x={decreasePos.x} y={decreasePos.y} scale={decreasePos.scale}>
		<ButtonDecrease anchor={0.5} />
	</Container>

	<Container x={increasePos.x} y={increasePos.y} scale={increasePos.scale}>
		<ButtonIncrease anchor={0.5} />
	</Container>

	<Container x={autoSpinPos.x} y={autoSpinPos.y} scale={autoSpinPos.scale}>
		<ButtonAutoSpin anchor={0.5} />
	</Container>

	<Container x={buttonBetPos.x} y={buttonBetPos.y} scale={buttonBetPos.scale}>
		<ButtonBet anchor={0.5} />
	</Container>

	<Container x={turboPos.x} y={turboPos.y} scale={turboPos.scale}>
		<ButtonTurbo anchor={0.5} />
	</Container>

	<Container x={soundPos.x} y={soundPos.y} scale={soundPos.scale}>
		<ButtonSoundSwitch anchor={0.5} />
	</Container>
</MainContainer>

<!-- Menu overlay when open -->
{#if stateUi.menuOpen}
	<Rectangle
		eventMode="static"
		cursor="pointer"
		alpha={0.5}
		anchor={0.5}
		backgroundColor={BLACK}
		width={context.stateLayoutDerived.canvasSizes().width}
		height={context.stateLayoutDerived.canvasSizes().height}
		x={context.stateLayoutDerived.canvasSizes().width * 0.5}
		y={context.stateLayoutDerived.canvasSizes().height * 0.5}
		onpointerup={() => (stateUi.menuOpen = false)}
	/>

	<MainContainer standard>
		<Container x={layoutWidth * 0.1} y={layoutHeight * 0.5}>
			<Container scale={0.7} y={-150}>
				<ButtonPayTable anchor={0.5} />
			</Container>

			<Container scale={0.7} y={-50}>
				<ButtonGameRules anchor={0.5} />
			</Container>

			<Container scale={0.7} y={50}>
				<ButtonSettings anchor={0.5} />
			</Container>

			<Container scale={0.7} y={150}>
				<ButtonMenuClose anchor={0.5} />
			</Container>
		</Container>
	</MainContainer>
{/if}
