<template>
	<Primitive :as="as" :as-child="asChild" :class="cn('hover:text-foreground transition-colors', props.class)">
		<slot />
	</Primitive>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { Primitive, type PrimitiveProps } from 'reka-ui';

const props = withDefaults(defineProps<PrimitiveProps & { class?: HTMLAttributes['class'] }>(), {
	as: 'a'
});
</script>
