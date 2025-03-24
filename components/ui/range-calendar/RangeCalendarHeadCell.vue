<template>
	<RangeCalendarHeadCell :class="cn('text-muted-foreground w-8 rounded-md text-[0.8rem] font-normal', props.class)" v-bind="forwardedProps">
		<slot />
	</RangeCalendarHeadCell>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import { RangeCalendarHeadCell, type RangeCalendarHeadCellProps, useForwardProps } from 'reka-ui';

const props = defineProps<RangeCalendarHeadCellProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
