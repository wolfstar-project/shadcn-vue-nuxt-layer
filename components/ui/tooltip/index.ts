import type { TooltipArrowProps, TooltipContentEmits, TooltipContentProps, TooltipRootEmits, TooltipRootProps } from 'reka-ui';
import type { KbdProps } from '../kbd';
import type { EmitsToProps, HtmlHTMLAttributes } from 'vue';
import { tv } from 'tailwind-variants';

export { default as Tooltip } from './Tooltip.vue';
export { default as TooltipContent } from './TooltipContent.vue';
export { default as TooltipTrigger } from './TooltipTrigger.vue';
export { default as TooltipProvider } from './TooltipProvider.vue';

export const tooltip = tv({
	base: 'tooltip',
	slots: {
		content:
			'flex items-center gap-1 bg-base-100 text-base-content shadow-sm rounded-btn ring-1 ring-neutral h-6 px-2 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] pointer-events-auto',
		arrow: 'fill-neutral',
		text: 'truncate',
		kbds: `hidden lg:inline-flex items-center shrink-0 gap-0.5 before:content-['·'] before:me-0.5`,
		kbdsSize: 'sm'
	}
});

export type TooltipVariants = typeof tooltip.variants;

export interface TooltipProps extends TooltipRootProps {
	/** The text content of the tooltip. */
	text?: string;
	/** The keyboard keys to display in the tooltip. */
	kbds?: KbdProps['value'][] | KbdProps[];
	/**
	 * The content of the tooltip.
	 * @defaultValue { side: 'bottom', sideOffset: 8, collisionPadding: 8 }
	 */
	content?: Omit<TooltipContentProps, 'as' | 'asChild'> & Partial<EmitsToProps<TooltipContentEmits>>;
	/**
	 * Display an arrow alongside the tooltip.
	 * @defaultValue false
	 */
	arrow?: boolean | Omit<TooltipArrowProps, 'as' | 'asChild'>;
	/**
	 * Render the tooltip in a portal.
	 * @defaultValue true
	 */
	portal?: boolean;
	class?: HtmlHTMLAttributes['class'];
	ui?: Partial<typeof tooltip.slots>;
}

export type TooltipEmits = TooltipRootEmits;

export interface TooltipSlots {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default(props: { open: boolean }): any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content(props?: object): any;
}
