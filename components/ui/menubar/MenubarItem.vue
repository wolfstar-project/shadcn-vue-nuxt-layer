<template>
	<MenubarItem
		v-bind="forwarded"
		:class="
			cn(
				'focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				inset && 'pl-8',
				props.class
			)
		"
	>
		<slot />
	</MenubarItem>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { MenubarItem, type MenubarItemEmits, type MenubarItemProps, useForwardPropsEmits } from 'reka-ui';

const props = defineProps<MenubarItemProps & { class?: HTMLAttributes['class']; inset?: boolean }>();

const emits = defineEmits<MenubarItemEmits>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>
