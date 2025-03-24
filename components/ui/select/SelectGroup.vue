<template>
	<SelectGroup :class="cn('w-full p-1', props.class)" v-bind="delegatedProps">
		<slot />
	</SelectGroup>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { SelectGroup, type SelectGroupProps } from 'reka-ui';

const props = defineProps<SelectGroupProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
