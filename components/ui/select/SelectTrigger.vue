<template>
	<SelectTrigger
		v-bind="forwardedProps"
		:class="
			cn(
				'border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
				props.class
			)
		"
	>
		<slot />
		<SelectIcon as-child>
			<UIcon name="radix-icons:caret-sort" class="h-4 w-4 flex-shrink-0 opacity-50" />
		</SelectIcon>
	</SelectTrigger>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'reka-ui';

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
