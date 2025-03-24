<template>
	<TabsList
		v-bind="delegatedProps"
		:class="cn('bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1', props.class)"
	>
		<slot />
	</TabsList>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { TabsList, type TabsListProps } from 'reka-ui';

const props = defineProps<TabsListProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
