<template>
	<ContextMenuRadioItem
		v-bind="forwarded"
		:class="
			cn(
				'focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				props.class
			)
		"
	>
		<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			<ContextMenuItemIndicator>
				<DotFilledIcon class="h-4 w-4 fill-current" />
			</ContextMenuItemIndicator>
		</span>
		<slot />
	</ContextMenuRadioItem>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import {
	ContextMenuItemIndicator,
	ContextMenuRadioItem,
	type ContextMenuRadioItemEmits,
	type ContextMenuRadioItemProps,
	useForwardPropsEmits
} from 'reka-ui';
import { DotFilledIcon } from '@radix-icons/vue';

const props = defineProps<ContextMenuRadioItemProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<ContextMenuRadioItemEmits>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>
