import { tv, type VariantProps } from 'tailwind-variants';
import type { HtmlHTMLAttributes } from 'vue';

export { default as AvatarGroup } from './AvatarGroup.vue';

export const avatarGroupVariants = tv({
	slots: {
		root: 'inline-flex flex-row-reverse justify-end',
		base: 'relative rounded-full ring-(--ui-bg) first:me-0'
	},
	variants: {
		size: {
			'3xs': {
				base: 'ring -me-0.5'
			},
			'2xs': {
				base: 'ring -me-0.5'
			},
			xs: {
				base: 'ring -me-0.5'
			},
			sm: {
				base: 'ring-2 -me-1.5'
			},
			md: {
				base: 'ring-2 -me-1.5'
			},
			lg: {
				base: 'ring-2 -me-1.5'
			},
			xl: {
				base: 'ring-3 -me-2'
			},
			'2xl': {
				base: 'ring-3 -me-2'
			},
			'3xl': {
				base: 'ring-3 -me-2'
			}
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

export type AvatarGroupVariants = VariantProps<typeof avatarGroupVariants>;

export interface AvatarGroupProps {
	/**
	 * The element or component this component should render as.
	 * @defaultValue 'div'
	 */
	as?: string;
	/**
	 * @defaultValue 'md'
	 */
	size?: AvatarGroupVariants['size'];
	/**
	 * The maximum number of avatars to display.
	 */
	max?: number | string;
	class?: HtmlHTMLAttributes['class'];
	ui?: Partial<typeof avatarGroupVariants.slots>;
}

export interface AvatarGroupSlots {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default(props?: object): any;
}
