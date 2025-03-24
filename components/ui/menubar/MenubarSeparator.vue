<template>
	<MenubarSeparator :class="cn('bg-muted -mx-1 my-1 h-px', props.class)" v-bind="forwardedProps" />
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { MenubarSeparator, type MenubarSeparatorProps, useForwardProps } from 'reka-ui';

const props = defineProps<MenubarSeparatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
