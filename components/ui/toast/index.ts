/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ToastProviderProps, ToastRootEmits, ToastRootProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';

import { type VariantProps, tv } from 'tailwind-variants';
import type { StringOrVNode } from '~/types/utils';
import type { ButtonProps } from '../button';
import type { AvatarProps } from '../avatar';

export { default as Toaster } from './Toast.vue';
export { default as Toast } from './Toaster.vue';
export { default as ToastViewport } from './ToastViewport.vue';
export { default as ToastAction } from './ToastAction.vue';
export { default as ToastClose } from './ToastClose.vue';
export { default as ToastTitle } from './ToastTitle.vue';
export { default as ToastDescription } from './ToastDescription.vue';

export const toast = tv({
	base: 'toast relative',
	slots: {
		root: 'alert shadow-lg',
		wrapper: 'w-0 flex-1 flex flex-col',
		title: 'font-bold',
		description: 'text-sm',
		icon: 'shrink-0 size-5',
		avatar: 'shrink-0',
		avatarSize: '2xl',
		actions: 'flex gap-1.5 shrink-0',
		progress: 'absolute inset-x-0 bottom-0 h-1 z-[-1]',
		close: 'p-0'
	},
	variants: {
		color: {
			primary: {
				root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary`,
				icon: `text-primary`,
				progress: `bg-primary`
			},
			secondary: {
				root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary`,
				icon: `text-secondary`,
				progress: `bg-secondary`
			},
			success: {
				root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success`,
				icon: `text-success`,
				progress: `bg-success`
			},
			error: {
				root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error`,
				icon: `text-error`,
				progress: `bg-error`
			},
			info: {
				root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info`,
				icon: `text-info`,
				progress: `bg-info`
			},
			neutral: {
				root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neatrual`,
				icon: `text-neutral`,
				progress: `bg-neutral`
			}
		},
		orientation: {
			horizontal: {
				root: 'flex-row items-center',
				actions: 'items-center'
			},
			vertical: {
				root: 'flex-col items-start',
				actions: 'items-start mt-2'
			}
		},
		title: {
			true: {
				description: 'mt-1'
			}
		}
	},
	defaultVariants: {
		variant: 'info',
		position: 'end',
		vertical: 'bottom',
		orientation: 'horizontal'
	}
});

export type ToastVariants = VariantProps<typeof toast>;

export interface ToastProps extends Pick<ToastRootProps, 'defaultOpen' | 'open' | 'type' | 'duration'> {
	as?: any;
	title?: StringOrVNode;
	description?: StringOrVNode;
	icon?: string;
	avatar?: AvatarProps;
	color?: ToastVariants['color'];
	orientation?: ToastVariants['orientation'];
	actions?: ButtonProps[];
	close?: boolean | Partial<ButtonProps>;
	closeIcon?: string;
	class?: HTMLAttributes['class'];
	ui?: Partial<typeof toast.slots>;
}

export type ToastEmits = ToastRootEmits;

export interface ToastSlots {
	leading(props?: object): any;
	title(props?: object): any;
	description(props?: object): any;
	actions(props?: object): any;
	close(props: { ui: any }): any;
}
export const toaster = tv({
	slots: {
		viewport: 'fixed flex flex-col w-[calc(100%-2rem)] sm:w-96 z-[100] data-[expanded=true]:h-(--height) focus:outline-none',
		base: 'pointer-events-auto absolute inset-x-0 z-(--index) transform-(--transform) data-[expanded=false]:data-[front=false]:h-(--front-height) data-[expanded=false]:data-[front=false]:*:invisible data-[state=closed]:animate-[toast-closed_200ms_ease-in-out] data-[state=closed]:data-[expanded=false]:data-[front=false]:animate-[toast-collapsed-closed_200ms_ease-in-out] data-[swipe=move]:transition-none transition-[transform,translate,height] duration-200 ease-out'
	},

	variants: {
		position: {
			'top-left': {
				viewport: 'toast-start'
			},
			'top-center': {
				viewport: 'toast-center'
			},
			'top-right': {
				viewport: 'right-4'
			},
			'bottom-left': {
				viewport: 'toast-bottom toast-start'
			},
			'bottom-center': {
				viewport: 'left-1/2 transform -translate-x-1/2'
			},
			'bottom-right': {
				viewport: 'right-4'
			}
		},
		swipeDirection: {
			up: 'data-[swipe=end]:animate-[toast-slide-up_200ms_ease-out]',
			right: 'data-[swipe=end]:animate-[toast-slide-right_200ms_ease-out]',
			down: 'data-[swipe=end]:animate-[toast-slide-down_200ms_ease-out]',
			left: 'data-[swipe=end]:animate-[toast-slide-left_200ms_ease-out]'
		}
	},
	compoundVariants: [
		{
			position: ['top-left', 'top-center', 'top-right'],
			class: {
				viewport: 'top-4',
				base: 'top-0 data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out]'
			}
		},
		{
			position: ['bottom-left', 'bottom-center', 'bottom-right'],
			class: {
				viewport: 'bottom-4',
				base: 'bottom-0 data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out]'
			}
		},
		{
			swipeDirection: ['left', 'right'],
			class: 'data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x) data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=cancel]:translate-x-0'
		},
		{
			swipeDirection: ['up', 'down'],
			class: 'data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y) data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=cancel]:translate-y-0'
		}
	],
	defaultVariants: {
		position: 'bottom-right'
	}
});
export type ToasterVariants = VariantProps<typeof toaster>;
export interface ToasterProps extends Omit<ToastProviderProps, 'swipeDirection'> {
	/**
	 * The position on the screen to display the toasts.
	 * @defaultValue 'bottom-right'
	 */
	position?: ToasterVariants['position'];
	/**
	 * Expand the toasts to show multiple toasts at once.
	 * @defaultValue true
	 */
	expand?: boolean;
	/**
	 * Render the toaster in a portal.
	 * @defaultValue true
	 */
	portal?: boolean;
	class?: any;
	ui?: Partial<typeof toaster.slots>;
}

export interface ToasterSlots {
	default(props?: object): any;
}
