import { type VariantProps, tv } from 'tailwind-variants';
import type { LinkProps } from '../link';
import type { HTMLAttributes } from 'vue';
import { buttonGroupVariant } from '../button-group';
import type { UseComponentIconsProps } from '~/composables/useComponentIcons';

export { default as Button } from './Button.vue';

// Type-safe color definitions with readonly array
const colors = ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'neutral'] as const;

export const buttonVariants = tv({
	slots: {
		base: [
			'btn', // daisyUI button base class
			'inline-flex items-center',
			'disabled:cursor-not-allowed aria-disabled:cursor-not-allowed',
			'disabled:opacity-75 aria-disabled:opacity-75'
		],
		label: 'truncate',
		leadingIcon: 'shrink-0',
		leadingAvatar: 'shrink-0',
		leadingAvatarSize: '',
		trailingIcon: 'shrink-0'
	},
	variants: {
		...buttonGroupVariant,
		color: Object.fromEntries(colors.map((color) => [color, `btn-${color}`])),
		variant: {
			outline: 'btn-outline',
			soft: 'btn-ghost opacity-80',
			subtle: 'btn-ghost',
			ghost: 'btn-ghost',
			link: 'btn-link'
		},
		size: {
			xs: {
				base: 'btn-xs gap-1',
				leadingIcon: 'size-4',
				leadingAvatarSize: '3xs',
				trailingIcon: 'size-4'
			},
			sm: {
				base: 'btn-sm gap-1.5',
				leadingIcon: 'size-4',
				leadingAvatarSize: '3xs',
				trailingIcon: 'size-4'
			},
			md: {
				base: 'btn-md gap-1.5',
				leadingIcon: 'size-5',
				leadingAvatarSize: '2xs',
				trailingIcon: 'size-5'
			},
			lg: {
				base: 'btn-lg gap-2',
				leadingIcon: 'size-5',
				leadingAvatarSize: '2xs',
				trailingIcon: 'size-5'
			},
			xl: {
				base: 'btn-xl gap-2',
				leadingIcon: 'size-6',
				leadingAvatarSize: 'xs',
				trailingIcon: 'size-6'
			}
		},
		block: {
			true: 'btn-block'
		},
		square: {
			true: 'btn-square'
		},
		leading: {
			true: ''
		},
		trailing: {
			true: ''
		},
		loading: {
			true: 'btn-disabled'
		},
		active: {
			true: {
				base: 'btn-active'
			},
			false: {
				base: ''
			}
		}
	},
	compoundVariants: [
		// Neutral variants
		{
			color: 'neutral',
			class: `disabled:btn-disabled aria-disabled:btn-disabled`
		},
		{
			color: 'neutral',
			variant: 'outline',
			class: ` disabled:btn-disabled aria-disabled:btn-disabled`
		},
		{
			color: 'neutral',
			variant: 'soft',
			class: `opacity-80 disabled:btn-disabled aria-disabled:btn-disabled`
		},
		{
			color: 'neutral',
			variant: 'subtle',
			class: `disabled:btn-disabled aria-disabled:btn-disabled`
		},
		{
			color: 'neutral',
			variant: 'ghost',
			class: `disabled:btn-disabled aria-disabled:btn-disabled`
		},
		{
			color: 'neutral',
			variant: 'link',
			class: `disabled:btn-disabled aria-disabled:btn-disabled`
		},
		{
			size: 'xs',
			square: true,
			class: 'p-1'
		},
		{
			size: 'sm',
			square: true,
			class: 'p-1.5'
		},
		{
			size: 'md',
			square: true,
			class: 'p-1.5'
		},
		{
			size: 'lg',
			square: true,
			class: 'p-2'
		},
		{
			size: 'xl',
			square: true,
			class: 'p-2'
		},
		{
			loading: true,
			leading: true,
			class: {
				leadingIcon: 'animate-spin'
			}
		},
		{
			loading: true,
			leading: false,
			trailing: true,
			class: {
				trailingIcon: 'animate-spin'
			}
		}
	],

	defaultVariants: {
		color: 'primary',
		size: 'md'
	}
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends UseComponentIconsProps, Omit<LinkProps, 'raw' | 'custom'> {
	label?: string;
	color?: ButtonVariants['color'];
	activeColor?: ButtonVariants['color'];
	variant?: ButtonVariants['variant'];
	activeVariant?: ButtonVariants['variant'];
	size?: ButtonVariants['size'];
	square?: boolean;
	block?: boolean;
	loadingAuto?: boolean;
	onClick?: ((event: MouseEvent) => void | Promise<void>) | Array<(event: MouseEvent) => void | Promise<void>>;
	class?: HTMLAttributes['class'];
	ui?: Partial<typeof buttonVariants.slots>;
}

export interface ButtonSlots {
	leading(props?: object): unknown;
	default(props?: object): unknown;
	trailing(props?: object): unknown;
}
