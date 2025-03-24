<template>
	<h3 :class="cn('leading-none font-semibold tracking-tight', props.class)">
		<slot />
	</h3>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
	class?: HTMLAttributes['class'];
}>();
</script>
