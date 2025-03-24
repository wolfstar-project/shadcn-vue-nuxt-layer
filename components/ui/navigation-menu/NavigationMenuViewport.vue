<template>
	<div class="absolute top-full left-0 flex justify-center">
		<NavigationMenuViewport
			v-bind="forwardedProps"
			:class="
				cn(
					'origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border shadow md:w-[--radix-navigation-menu-viewport-width]',
					props.class
				)
			"
		/>
	</div>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { NavigationMenuViewport, type NavigationMenuViewportProps, useForwardProps } from 'reka-ui';

const props = defineProps<NavigationMenuViewportProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
