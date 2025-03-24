<template>
	<PaginationNext v-bind="delegatedProps">
		<Button :class="cn('h-9 w-9 p-0', props.class)" variant="outline">
			<slot>
				<Icon name="radix-icons:chevron-right" />
			</slot>
		</Button>
	</PaginationNext>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { PaginationNext, type PaginationNextProps } from 'reka-ui';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

// eslint-disable-next-line vue/require-default-prop
const props = withDefaults(defineProps<PaginationNextProps & { class?: HTMLAttributes['class'] }>(), {
	asChild: true
});

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
