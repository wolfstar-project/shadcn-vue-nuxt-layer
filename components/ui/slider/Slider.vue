<template>
	<SliderRoot :class="cn('relative flex w-full touch-none select-none items-center', props.class)" v-bind="forwarded">
		<SliderTrack class="bg-primary/20 relative h-1.5 w-full grow overflow-hidden rounded-full">
			<SliderRange class="bg-primary absolute h-full" />
		</SliderTrack>
		<SliderThumb
			v-for="(_, key) in modelValue"
			:key="key"
			class="border-primary bg-background ring-offset-background focus-visible:ring-ring block h-5 w-5 rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
		/>
	</SliderRoot>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import type { SliderRootEmits, SliderRootProps } from 'reka-ui';
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'reka-ui';

const props = defineProps<SliderRootProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<SliderRootEmits>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>
