<template>
	<RangeCalendarGridRow :class="cn('mt-2 flex w-full', props.class)" v-bind="forwardedProps">
		<slot />
	</RangeCalendarGridRow>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import { RangeCalendarGridRow, type RangeCalendarGridRowProps, useForwardProps } from 'reka-ui';

const props = defineProps<RangeCalendarGridRowProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
