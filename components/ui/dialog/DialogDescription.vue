<template>
	<DialogDescription v-bind="forwardedProps" :class="cn('text-muted-foreground text-sm', props.class)">
		<slot />
	</DialogDescription>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { DialogDescription, type DialogDescriptionProps, useForwardProps } from 'reka-ui';

const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
