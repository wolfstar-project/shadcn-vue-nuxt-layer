<template>
	<AccordionItem v-bind="forwardedProps" :class="cn('border-b', props.class)">
		<slot />
	</AccordionItem>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { AccordionItem, type AccordionItemProps, useForwardProps } from 'reka-ui';

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
