<template>
	<PinInputInput
		v-bind="forwardedProps"
		:class="
			cn(
				'focus:ring-ring border-input relative flex h-10 w-10 items-center justify-center border-y border-r text-center text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md focus:relative focus:z-10 focus:outline-none focus:ring-2',
				props.class
			)
		"
	/>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { PinInputInput, type PinInputInputProps, useForwardProps } from 'reka-ui';

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;
	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
