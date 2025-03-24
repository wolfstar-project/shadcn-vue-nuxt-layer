<template>
	<Primitive :as="as" :class="ButtonGroupVariant({ orientation, class: props.class })">
		<slot />
	</Primitive>
</template>

<script setup lang="ts">
import { provide, computed } from 'vue';
import { Primitive } from 'reka-ui';
import { BUTTON_GROUP_INJECTION_KEY } from './button-group';
import { ButtonGroupVariant, type ButtonGroupProps, type ButtonGroupSlots } from '.';

const props = withDefaults(defineProps<ButtonGroupProps>(), {
	orientation: 'horizontal'
});
defineSlots<ButtonGroupSlots>();

provide(
	BUTTON_GROUP_INJECTION_KEY,
	computed(() => ({
		orientation: props.orientation,
		size: props.size
	}))
);
</script>
