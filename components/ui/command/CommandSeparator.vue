<template>
	<ComboboxSeparator v-bind="delegatedProps" :class="cn('bg-border -mx-1 h-px', props.class)">
		<slot />
	</ComboboxSeparator>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import type { ComboboxSeparatorProps } from 'reka-ui';
import { ComboboxSeparator } from 'reka-ui';

const props = defineProps<ComboboxSeparatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
