<template>
	<Separator
		v-bind="delegatedProps"
		:class="cn('bg-border shrink-0', props.orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full', props.class)"
	/>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { Separator, type SeparatorProps } from 'reka-ui';

const props = defineProps<SeparatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
