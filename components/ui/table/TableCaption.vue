<template>
	<caption :class="cn('text-muted-foreground mt-4 text-sm', props.class)">
		<slot />
	</caption>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
	class?: HTMLAttributes['class'];
}>();
</script>
