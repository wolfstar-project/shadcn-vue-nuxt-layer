<template>
	<RangeCalendarNext
		:class="cn(buttonVariants({ variant: 'outline' }), 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100', props.class)"
		v-bind="forwardedProps"
	>
		<slot>
			<UIcon name="radix-icons:chevron-right" class="h-4 w-4" />
		</slot>
	</RangeCalendarNext>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import { RangeCalendarNext, type RangeCalendarNextProps, useForwardProps } from 'reka-ui';

import { buttonVariants } from '@/components/ui/button';

const props = defineProps<RangeCalendarNextProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
