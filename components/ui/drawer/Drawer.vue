<template>
	<DrawerRoot v-bind="forwarded">
		<slot />
	</DrawerRoot>
</template>

<script lang="ts" setup>
import type { DrawerRootEmits, DrawerRootProps } from 'vaul-vue';
import { DrawerRoot } from 'vaul-vue';
import { useForwardPropsEmits } from 'reka-ui';

const props = withDefaults(defineProps<DrawerRootProps>(), {
	shouldScaleBackground: true
});

const emits = defineEmits<DrawerRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>
