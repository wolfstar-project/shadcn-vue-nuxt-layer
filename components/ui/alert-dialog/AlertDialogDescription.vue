<template>
	<AlertDialogDescription v-bind="delegatedProps" :class="cn('text-muted-foreground text-sm', props.class)">
		<slot />
	</AlertDialogDescription>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { AlertDialogDescription, type AlertDialogDescriptionProps } from 'reka-ui';

const props = defineProps<AlertDialogDescriptionProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
