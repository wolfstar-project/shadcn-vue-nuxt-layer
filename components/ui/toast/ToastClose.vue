<template>
	<ToastClose
		v-bind="delegatedProps"
		:class="
			cn(
				'text-foreground/50 hover:text-foreground absolute top-1 right-1 rounded-md p-1 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:ring-1 focus:outline-none group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
				props.class
			)
		"
	>
		<Cross2Icon class="h-4 w-4" />
	</ToastClose>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { ToastClose, type ToastCloseProps } from 'reka-ui';

const props = defineProps<
	ToastCloseProps & {
		class?: HTMLAttributes['class'];
	}
>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
