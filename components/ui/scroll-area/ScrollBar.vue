<template>
	<ScrollAreaScrollbar
		v-bind="delegatedProps"
		:class="
			cn(
				'flex touch-none transition-colors select-none',
				orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-px',
				orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-px',
				props.class
			)
		"
	>
		<ScrollAreaThumb class="bg-border relative flex-1 rounded-full" />
	</ScrollAreaScrollbar>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { ScrollAreaScrollbar, type ScrollAreaScrollbarProps, ScrollAreaThumb } from 'reka-ui';

// eslint-disable-next-line vue/require-default-prop
const props = withDefaults(defineProps<ScrollAreaScrollbarProps & { class?: HTMLAttributes['class'] }>(), {
	orientation: 'vertical'
});

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
