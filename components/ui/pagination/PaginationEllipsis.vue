<template>
	<PaginationEllipsis v-bind="delegatedProps" :class="cn('flex h-9 w-9 items-center justify-center', props.class)">
		<slot>
			<DotsHorizontalIcon />
		</slot>
	</PaginationEllipsis>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { PaginationEllipsis, type PaginationEllipsisProps } from 'reka-ui';
import { DotsHorizontalIcon } from '@radix-icons/vue';

const props = defineProps<PaginationEllipsisProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
