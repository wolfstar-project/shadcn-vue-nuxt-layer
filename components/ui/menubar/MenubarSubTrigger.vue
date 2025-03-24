<template>
	<MenubarSubTrigger
		v-bind="forwardedProps"
		:class="
			cn(
				'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none',
				inset && 'pl-8',
				props.class
			)
		"
	>
		<slot />
		<ChevronRightIcon class="ml-auto h-4 w-4" />
	</MenubarSubTrigger>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { MenubarSubTrigger, type MenubarSubTriggerProps, useForwardProps } from 'reka-ui';
import { ChevronRightIcon } from '@radix-icons/vue';

const props = defineProps<MenubarSubTriggerProps & { class?: HTMLAttributes['class']; inset?: boolean }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
