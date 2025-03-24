<template>
	<div :class="cn('skeleton', props.class)" />
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface SkeletonProps {
	class?: HTMLAttributes['class'];
}

const props = defineProps<SkeletonProps>();
</script>
