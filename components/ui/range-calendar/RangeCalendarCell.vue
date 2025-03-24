<template>
	<RangeCalendarCell
		:class="
			cn(
				'[&:has([data-selected])]:bg-accent [&:has([data-selected][data-outside-month])]:bg-accent/50 relative p-0 text-center text-sm focus-within:relative focus-within:z-20 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md',
				props.class
			)
		"
		v-bind="forwardedProps"
	>
		<slot />
	</RangeCalendarCell>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import { RangeCalendarCell, type RangeCalendarCellProps, useForwardProps } from 'reka-ui';

const props = defineProps<RangeCalendarCellProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
