<template>
	<CollapsibleContent
		v-bind="props"
		class="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden transition-all"
	>
		<slot />
	</CollapsibleContent>
</template>

<script setup lang="ts">
import { CollapsibleContent, type CollapsibleContentProps } from 'reka-ui';

const props = defineProps<CollapsibleContentProps>();
</script>
