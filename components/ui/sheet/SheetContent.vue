<template>
	<DialogPortal>
		<DialogOverlay
			class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
		/>
		<DialogContent :class="cn(sheetVariants({ side }), props.class)" v-bind="{ ...forwarded, ...$attrs }">
			<slot />

			<DialogClose
				class="ring-offset-background data-[state=open]:bg-secondary focus:ring-ring absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none"
			>
				<UIcon name="radix-icons:cross-2" class="h-4 w-4" />
			</DialogClose>
		</DialogContent>
	</DialogPortal>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import {
	DialogClose,
	DialogContent,
	type DialogContentEmits,
	type DialogContentProps,
	DialogOverlay,
	DialogPortal,
	useForwardPropsEmits
} from 'reka-ui';
import { type SheetVariants, sheetVariants } from '.';

interface SheetContentProps extends DialogContentProps {
	class?: HTMLAttributes['class'];
	side?: SheetVariants['side'];
}

defineOptions({
	inheritAttrs: false
});

const props = defineProps<SheetContentProps>();

const emits = defineEmits<DialogContentEmits>();

const delegatedProps = computed(() => {
	const { class: _, side, ...delegated } = props;

	return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>
