<template>
	<DropdownMenuItem
		v-bind="forwardedProps"
		:class="
			cn(
				'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				inset && 'pl-8',
				props.class
			)
		"
	>
		<slot />
	</DropdownMenuItem>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { DropdownMenuItem, type DropdownMenuItemProps, useForwardProps } from 'reka-ui';

const props = defineProps<DropdownMenuItemProps & { class?: HTMLAttributes['class']; inset?: boolean }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
