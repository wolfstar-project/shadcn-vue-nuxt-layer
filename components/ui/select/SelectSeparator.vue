<template>
	<SelectSeparator v-bind="delegatedProps" :class="cn('bg-muted -mx-1 my-1 h-px', props.class)" />
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { SelectSeparator, type SelectSeparatorProps } from 'reka-ui';

const props = defineProps<SelectSeparatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
