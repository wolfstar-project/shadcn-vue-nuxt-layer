<template>
	<span role="link" aria-disabled="true" aria-current="page" :class="cn('text-foreground font-normal', props.class)">
		<slot />
	</span>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
	class?: HTMLAttributes['class'];
}>();
</script>
