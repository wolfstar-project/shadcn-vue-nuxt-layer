<template>
	<AccordionHeader class="flex">
		<AccordionTrigger
			v-bind="delegatedProps"
			:class="
				cn(
					'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
					props.class
				)
			"
		>
			<slot />
			<slot name="icon">
				<UIcon name="radix-icons:chevron-down" class="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" />
			</slot>
		</AccordionTrigger>
	</AccordionHeader>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from 'reka-ui';

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
