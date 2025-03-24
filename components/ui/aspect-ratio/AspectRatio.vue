<template>
	<AspectRatio v-bind="props">
		<slot />
	</AspectRatio>
</template>

<script setup lang="ts">
import { AspectRatio, type AspectRatioProps } from 'reka-ui';

const props = defineProps<AspectRatioProps>();
</script>
