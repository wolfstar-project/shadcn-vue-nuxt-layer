<template>
	<SelectScrollUpButton v-bind="forwardedProps" :class="cn('flex cursor-default items-center justify-center py-1', props.class)">
		<slot>
			<UIcon name="radix-icons:chevron-up" />
		</slot>
	</SelectScrollUpButton>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { SelectScrollUpButton, type SelectScrollUpButtonProps, useForwardProps } from 'reka-ui';

const props = defineProps<SelectScrollUpButtonProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
