<template>
	<AlertDialogAction v-bind="delegatedProps" :class="cn(buttonVariants(), props.class)">
		<slot />
	</AlertDialogAction>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { AlertDialogAction, type AlertDialogActionProps } from 'reka-ui';

import { buttonVariants } from '@/components/ui/button';

const props = defineProps<AlertDialogActionProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});
</script>
