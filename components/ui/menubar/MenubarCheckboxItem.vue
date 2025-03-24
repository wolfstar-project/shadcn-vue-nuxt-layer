<template>
	<MenubarCheckboxItem
		v-bind="forwarded"
		:class="
			cn(
				'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				props.class
			)
		"
	>
		<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			<MenubarItemIndicator>
				<Icon name="radix-icons:check" class="size-4" />
			</MenubarItemIndicator>
		</span>
		<slot />
	</MenubarCheckboxItem>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import {
	MenubarCheckboxItem,
	type MenubarCheckboxItemEmits,
	type MenubarCheckboxItemProps,
	MenubarItemIndicator,
	useForwardPropsEmits
} from 'reka-ui';
import { Icon } from '@/components/ui/icon';

const props = defineProps<MenubarCheckboxItemProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<MenubarCheckboxItemEmits>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>
