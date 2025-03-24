import { inject, provide, computed, type ComputedRef, type InjectionKey } from 'vue';
import type { AvatarGroupProps } from '.';

export const AVATAR_GROUP_INJECTION_KEY: InjectionKey<ComputedRef<{ size: AvatarGroupProps['size'] }>> = Symbol('avatarGroupInjectionKey');

export function useAvatarGroup(props: { size: AvatarGroupProps['size'] }) {
	const avatarGroup = inject(AVATAR_GROUP_INJECTION_KEY, undefined);

	const size = computed(() => props.size ?? avatarGroup?.value.size);
	provide(
		AVATAR_GROUP_INJECTION_KEY,
		computed(() => ({ size: size.value }))
	);

	return {
		size
	};
}
