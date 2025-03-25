<template>
	<ComboboxRoot
		v-bind="forwarded"
		:class="cn('bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md', props.class)"
	>
		<slot />
	</ComboboxRoot>
</template>

<script lang="ts"></script>

<script setup lang="ts" generic="T extends AcceptableValue">
import { type HTMLAttributes, computed } from 'vue';
import type { ComboboxRootEmits, ComboboxRootProps } from 'reka-ui';
import { ComboboxRoot, useForwardPropsEmits } from 'reka-ui';
type AcceptableValue = string | number | boolean | Record<string, any>;

const props = withDefaults(defineProps<ComboboxRootProps<T> & { class?: HTMLAttributes['class'] }>(), {
	open: true
});

const emits = defineEmits<ComboboxRootEmits>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>
