<template>
	<p :id="formDescriptionId" :class="cn('text-muted-foreground text-sm', props.class)">
		<slot />
	</p>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { useFormField } from './useFormField';

const props = defineProps<{
	class?: HTMLAttributes['class'];
}>();

const { formDescriptionId } = useFormField();
</script>
