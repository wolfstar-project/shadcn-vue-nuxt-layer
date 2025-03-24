import { tv, type VariantProps } from 'tailwind-variants';
export { default as Kbd } from './Kbd.vue';

export const kbd = tv({
	base: 'kbd',
	variants: {
		variant: {
			solid: 'bg-base-content text-base-100',
			outline: 'bg-base-100 border-base-content',
			subtle: 'bg-base-200 text-base-content'
		},
		size: {
			sm: 'kbd-sm',
			md: 'kbd-md',
			lg: 'kbd-lg'
		}
	},
	defaultVariants: {
		variant: 'outline',
		size: 'md'
	}
});

type KbdVariants = VariantProps<typeof kbd>;

export interface KbdProps {
	/**
	 * The element or component this component should render as.
	 * @defaultValue 'kbd'
	 */
	as?: any;
	value?: KbdKey | string;
	/**
	 * @defaultValue 'outline'
	 */
	variant?: KbdVariants['variant'];
	/**
	 * @defaultValue 'md'
	 */
	size?: KbdVariants['size'];
	class?: any;
}

export interface KbdSlots {
	default(props?: object): any;
}
