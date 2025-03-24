<template>
	<SelectItem
		v-bind="forwardedProps"
		:class="
			cn(
				'focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				props.class
			)
		"
	>
		<span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
			<SelectItemIndicator>
				<UIcon name="radix-icons:check" class="h-4 w-4" />
			</SelectItemIndicator>
		</span>

		<SelectItemText>
			<slot />
		</SelectItemText>
	</SelectItem>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { SelectItem, SelectItemIndicator, type SelectItemProps, SelectItemText, useForwardProps } from 'reka-ui';

const props = defineProps<SelectItemProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
