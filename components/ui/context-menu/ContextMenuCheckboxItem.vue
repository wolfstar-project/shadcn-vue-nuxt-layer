<template>
	<ContextMenuCheckboxItem
		v-bind="forwarded"
		:class="
			cn(
				'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				props.class
			)
		"
	>
		<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			<ContextMenuItemIndicator>
				<Icon name="radix-icons:check" class="size-4" />
			</ContextMenuItemIndicator>
		</span>
		<slot />
	</ContextMenuCheckboxItem>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import {
	ContextMenuCheckboxItem,
	type ContextMenuCheckboxItemEmits,
	type ContextMenuCheckboxItemProps,
	ContextMenuItemIndicator,
	useForwardPropsEmits
} from 'reka-ui';
import { Icon } from '@/components/ui/icon';

const props = defineProps<ContextMenuCheckboxItemProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<ContextMenuCheckboxItemEmits>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>
