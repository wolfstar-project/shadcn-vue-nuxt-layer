<template>
	<CalendarHeadCell :class="cn('text-muted-foreground w-8 rounded-md text-[0.8rem] font-normal', props.class)" v-bind="forwardedProps">
		<slot />
	</CalendarHeadCell>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import { CalendarHeadCell, type CalendarHeadCellProps, useForwardProps } from 'reka-ui';

const props = defineProps<CalendarHeadCellProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
