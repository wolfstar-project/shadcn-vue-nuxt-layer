<template>
	<RadioGroupItem
		v-bind="forwardedProps"
		:class="
			cn(
				'border-primary text-primary focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border shadow focus:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
				props.class
			)
		"
	>
		<RadioGroupIndicator class="flex items-center justify-center">
			<UIcon name="radix-icons:check" class="fill-primary h-3.5 w-3.5" />
		</RadioGroupIndicator>
	</RadioGroupItem>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { RadioGroupIndicator, RadioGroupItem, type RadioGroupItemProps, useForwardProps } from 'reka-ui';

const props = defineProps<RadioGroupItemProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
