import type { InjectionKey, ComputedRef } from 'vue';
import { inject, computed } from 'vue';
import type { ButtonGroupProps } from '.';
import type { GetObjectField } from '@/types/utils';

export const BUTTON_GROUP_INJECTION_KEY: InjectionKey<
	ComputedRef<{
		size: ButtonGroupProps['size'];
		orientation: ButtonGroupProps['orientation'];
	}>
> = Symbol('buttonGroupInjectionKey');

type Props<T> = {
	size?: GetObjectField<T, 'size'>;
};

export function useButtonGroup<T>(props: Props<T>) {
	const buttonGroup = inject(BUTTON_GROUP_INJECTION_KEY, undefined);
	return {
		orientation: computed(() => buttonGroup?.value.orientation),
		size: computed(() => props?.size ?? buttonGroup?.value.size)
	};
}
