<template>
	<AccordionContent
		v-bind="delegatedProps"
		class="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden text-sm"
	>
		<div :class="cn('pb-4 pt-0', props.class)">
			<slot />
		</div>
	</AccordionContent>
</template>

<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
