<template>
	<AlertDialogTitle v-bind="delegatedProps" :class="cn('text-lg font-semibold', props.class)">
		<slot />
	</AlertDialogTitle>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { AlertDialogTitle, type AlertDialogTitleProps } from 'reka-ui';

const props = defineProps<AlertDialogTitleProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
