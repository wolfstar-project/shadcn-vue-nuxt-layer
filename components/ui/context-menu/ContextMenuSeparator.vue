<template>
	<ContextMenuSeparator v-bind="delegatedProps" :class="cn('bg-border -mx-1 my-1 h-px', props.class)" />
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { ContextMenuSeparator, type ContextMenuSeparatorProps } from 'reka-ui';

const props = defineProps<ContextMenuSeparatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
