<template>
	<Primitive v-bind="forwardedProps" :class="cn('flex items-center', props.class)">
		<slot />
	</Primitive>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui';

const props = defineProps<PrimitiveProps & { class?: HTMLAttributes['class'] }>();
const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;
	return delegated;
});
const forwardedProps = useForwardProps(delegatedProps);
</script>
