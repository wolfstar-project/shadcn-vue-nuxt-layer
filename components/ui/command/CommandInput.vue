<template>
	<div class="flex items-center border-b px-3" cmdk-input-wrapper>
		<!-- <Icon name="lucide:search" class="mr-2 h-4 w-4 shrink-0 opacity-50" /> -->
		<ComboboxInput
			v-bind="{ ...forwardedProps, ...$attrs }"
			auto-focus
			:class="
				cn(
					'placeholder:text-muted-foreground flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50',
					props.class
				)
			"
		/>
	</div>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { ComboboxInput, type ComboboxInputProps, useForwardProps } from 'reka-ui';

defineOptions({
	inheritAttrs: false
});

const props = defineProps<
	ComboboxInputProps & {
		class?: HTMLAttributes['class'];
	}
>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
