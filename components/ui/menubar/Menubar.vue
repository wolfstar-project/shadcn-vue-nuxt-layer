<template>
	<MenubarRoot v-bind="forwarded" :class="cn('bg-background flex h-9 items-center space-x-1 rounded-md border p-1 shadow-sm', props.class)">
		<slot />
	</MenubarRoot>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { MenubarRoot, type MenubarRootEmits, type MenubarRootProps, useForwardPropsEmits } from 'reka-ui';

const props = defineProps<MenubarRootProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<MenubarRootEmits>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>
