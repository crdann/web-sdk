/**
 * Cosmic Cluster UI Configuration
 * 
 * All UI positions are defined here using percentages relative to the main layout.
 * This makes the UI responsive to different screen sizes.
 * 
 * Values are 0-1 (percentages). For example:
 * - x: 0.5 means centered horizontally (50% from left)
 * - y: 0.9 means near the bottom (90% from top)
 */

// Label positions (Balance, Win, Bet text displays)
export const LABELS = {
	balance: {
		x: 0.18,  // 18% from left
		y: 0.88,  // 88% from top (near bottom)
		scale: 0.8,
	},
	win: {
		x: 0.50,  // Center
		y: 0.88,
		scale: 0.8,
	},
	bet: {
		x: 0.36,  // Between balance and win
		y: 0.88,
		scale: 0.8,
	},
} as const;

// Button positions
export const BUTTONS = {
	menu: {
		x: 0.04,  // Far left
		y: 0.94,
		scale: 0.7,
	},
	buyBonus: {
		x: 0.035,
		y: 0.83,
		scale: 0.7,
	},
	decrease: {
		x: 0.28,
		y: 0.94,
		scale: 0.7,
	},
	increase: {
		x: 0.38,
		y: 0.94,
		scale: 0.7,
	},
	autoSpin: {
		x: 0.85,
		y: 0.94,
		scale: 0.7,
	},
	bet: {
		x: 0.76,
		y: 0.90,
		scale: 0.7,
	},
	turbo: {
		x: 0.68,
		y: 0.94,
		scale: 0.7,
	},
	sound: {
		x: 0.96,
		y: 0.94,
		scale: 0.7,
	},
} as const;

// Bottom bar configuration
export const BOTTOM_BAR = {
	height: 0.2,  // 20% of screen height
} as const;

// Helper function to get pixel position from percentage
export const getPosition = (
	layoutWidth: number,
	layoutHeight: number,
	config: { x: number; y: number; scale: number }
) => ({
	x: layoutWidth * config.x,
	y: layoutHeight * config.y,
	scale: config.scale,
});
