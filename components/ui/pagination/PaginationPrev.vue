<template>
	<PaginationPrev v-bind="delegatedProps">
		<Button :class="cn('h-9 w-9 p-0', props.class)" variant="outline">
			<slot>
				<UIcon name="radix-icons:chevron-left" />
			</slot>
		</Button>
	</PaginationPrev>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { PaginationPrev, type PaginationPrevProps } from 'reka-ui';
import { Button } from '@/components/ui/button';

const props = withDefaults(defineProps<PaginationPrevProps & { class?: HTMLAttributes['class'] }>(), {
	asChild: true
});

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
