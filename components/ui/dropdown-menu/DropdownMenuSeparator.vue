<template>
	<DropdownMenuSeparator v-bind="delegatedProps" :class="cn('bg-muted -mx-1 my-1 h-px', props.class)" />
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { DropdownMenuSeparator, type DropdownMenuSeparatorProps } from 'reka-ui';

const props = defineProps<
	DropdownMenuSeparatorProps & {
		class?: HTMLAttributes['class'];
	}
>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
