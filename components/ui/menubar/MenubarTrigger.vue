<template>
	<MenubarTrigger
		v-bind="forwardedProps"
		:class="
			cn(
				'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none',
				props.class
			)
		"
	>
		<slot />
	</MenubarTrigger>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { MenubarTrigger, type MenubarTriggerProps, useForwardProps } from 'reka-ui';

const props = defineProps<MenubarTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
