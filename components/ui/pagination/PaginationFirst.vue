<template>
	<PaginationFirst v-bind="delegatedProps">
		<Button :class="cn('h-9 w-9 p-0', props.class)" variant="outline">
			<slot>
				<DoubleArrowLeftIcon />
			</slot>
		</Button>
	</PaginationFirst>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { PaginationFirst, type PaginationFirstProps } from 'reka-ui';
import { DoubleArrowLeftIcon } from '@radix-icons/vue';
import { Button } from '@/components/ui/button';

const props = withDefaults(defineProps<PaginationFirstProps & { class?: HTMLAttributes['class'] }>(), {
	asChild: true
});

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
