<template>
	<ToastAction
		v-bind="delegatedProps"
		:class="
			cn(
				'hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-1 disabled:pointer-events-none disabled:opacity-50',
				props.class
			)
		"
	>
		<slot />
	</ToastAction>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { ToastAction, type ToastActionProps } from 'reka-ui';

const props = defineProps<ToastActionProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
