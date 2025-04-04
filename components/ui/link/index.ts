import { tv } from 'tailwind-variants';
import type { ButtonHTMLAttributes, HTMLAttributes } from 'vue';
import type { RouterLinkProps, RouteLocationRaw } from 'vue-router';

import { reactivePick } from '@vueuse/core';

export { default as Link } from './Link.vue';
export { default as LinkBase } from './LinkBase.vue';

export interface LinkBaseProps {
	as?: string;
	type?: string;
	disabled?: boolean;
	onClick?: ((e: MouseEvent) => void | Promise<void>) | Array<(e: MouseEvent) => void | Promise<void>>;
	href?: string;
	navigate?: (e: MouseEvent) => void;
	target?: LinkProps['target'];
	rel?: LinkProps['rel'];
	isExternal?: boolean;
}

interface NuxtLinkProps extends Omit<RouterLinkProps, 'to'> {
	/**
	 * Route Location the link should navigate to when clicked on.
	 */
	to?: RouteLocationRaw; // need to manually type to avoid breaking typedPages
	/**
	 * An alias for `to`. If used with `to`, `href` will be ignored
	 */
	href?: NuxtLinkProps['to'];
	/**
	 * Forces the link to be considered as external (true) or internal (false). This is helpful to handle edge-cases
	 */
	external?: boolean;
	/**
	 * Where to display the linked URL, as the name for a browsing context.
	 */
	target?: '_blank' | '_parent' | '_self' | '_top' | (string & {}) | null;
	/**
	 * A rel attribute value to apply on the link. Defaults to "noopener noreferrer" for external links.
	 */
	rel?: 'noopener' | 'noreferrer' | 'nofollow' | 'sponsored' | 'ugc' | (string & {}) | null;
	/**
	 * If set to true, no rel attribute will be added to the link
	 */
	noRel?: boolean;
	/**
	 * A class to apply to links that have been prefetched.
	 */
	prefetchedClass?: string;
	/**
	 * When enabled will prefetch middleware, layouts and payloads of links in the viewport.
	 */
	prefetch?: boolean;
	/**
	 * Allows controlling when to prefetch links. By default, prefetch is triggered only on visibility.
	 */
	prefetchOn?:
		| 'visibility'
		| 'interaction'
		| Partial<{
				visibility: boolean;
				interaction: boolean;
		  }>;
	/**
	 * Escape hatch to disable `prefetch` attribute.
	 */
	noPrefetch?: boolean;
}

export interface LinkProps extends NuxtLinkProps {
	/**
	 * The element or component this component should render as when not a link.
	 * @defaultValue 'button'
	 */
	as?: string;
	/**
	 * The type of the button when not a link.
	 * @defaultValue 'button'
	 */
	type?: ButtonHTMLAttributes['type'];
	disabled?: boolean;
	/** Force the link to be active independent of the current route. */
	active?: boolean;
	/** Will only be active if the current route is an exact match. */
	exact?: boolean;
	/** Allows controlling how the current route query sets the link as active. */
	exactQuery?: boolean | 'partial';
	/** Will only be active if the current route hash is an exact match. */
	exactHash?: boolean;
	/** The class to apply when the link is inactive. */
	inactiveClass?: string;
	custom?: boolean;
	/** When `true`, only styles from `class`, `activeClass`, and `inactiveClass` will be applied. */
	raw?: boolean;
	class?: HTMLAttributes['class'];
}

export interface LinkSlots {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default(props: { active: boolean }): any;
}

export function pickLinkProps(link: LinkProps & { ariaLabel?: string; title?: string }) {
	return reactivePick(
		link,
		'active',
		'activeClass',
		'ariaCurrentValue',
		'ariaLabel',
		'as',
		'disabled',
		'exact',
		'exactActiveClass',
		'exactHash',
		'exactQuery',
		'external',
		'href',
		'inactiveClass',
		'noPrefetch',
		'noRel',
		'prefetch',
		'prefetchedClass',
		'rel',
		'replace',
		'target',
		'to',
		'type',
		'title'
	);
}

export const link = tv({
	base: 'link',
	variants: {
		active: {
			true: 'link-primary',
			false: 'link hover:link-hover'
		},
		disabled: {
			true: 'cursor-not-allowed opacity-75'
		}
	}
});
