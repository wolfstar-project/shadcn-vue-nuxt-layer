<template>
	<DialogTitle :class="cn('text-foreground text-lg font-semibold', props.class)" v-bind="delegatedProps">
		<slot />
	</DialogTitle>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { DialogTitle, type DialogTitleProps } from 'reka-ui';

const props = defineProps<DialogTitleProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
