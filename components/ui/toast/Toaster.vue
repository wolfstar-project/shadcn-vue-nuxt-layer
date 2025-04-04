<template>
	<ToastProvider :swipe-direction="swipeDirection" v-bind="providerProps">
		<slot />

		<Toast
			v-for="(toast, index) of toasts"
			:key="toast.id"
			ref="refs"
			:close="toast.close as boolean"
			:data-expanded="expanded"
			:data-front="!expanded && index === toasts.length - 1"
			:style="{
				'--index': index - toasts.length + toasts.length,
				'--before': toasts.length - 1 - index,
				'--offset': getOffset(index),
				'--scale': expanded ? '1' : 'calc(1 - var(--before) * var(--scale-factor))',
				'--translate': expanded ? 'calc(var(--offset) * var(--translate-factor))' : 'calc(var(--before) * var(--gap))',
				'--transform': 'translateY(var(--translate)) scale(var(--scale))'
			}"
			:class="[
				ui.base(),
				{
					'cursor-pointer': !!toast.onClick
				}
			]"
			@update:open="onUpdateOpen($event, toast.id)"
			@click="toast.onClick && toast.onClick(toast)"
		/>

		<ToastPortal :disabled="!portal">
			<ToastViewport
				:data-expanded="expanded"
				:class="ui.viewport({ class: [props.class, props.ui?.viewport] })"
				:style="{
					'--scale-factor': '0.05',
					'--translate-factor': position?.startsWith('top') ? '1px' : '-1px',
					'--gap': position?.startsWith('top') ? '16px' : '-16px',
					'--front-height': `${frontHeight}px`,
					'--height': `${height}px`
				}"
				@mouseenter="hovered = true"
				@mouseleave="hovered = false"
			/>
		</ToastPortal>
	</ToastProvider>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ToastProvider, ToastViewport, ToastPortal, useForwardProps } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { Toast, type ToasterProps, type ToasterSlots, toaster } from '.';
import { useToast } from './use-toast';

const props = withDefaults(defineProps<ToasterProps>(), {
	expand: true,
	portal: true,
	duration: 5000
});
defineSlots<ToasterSlots>();

const providerProps = useForwardProps(reactivePick(props, 'duration', 'label', 'swipeThreshold'));

const { toasts, remove } = useToast();

const swipeDirection = computed(() => {
	switch (props.position) {
		case 'top-center':
			return 'up';
		case 'top-right':
		case 'bottom-right':
			return 'right';
		case 'bottom-center':
			return 'down';
		case 'top-left':
		case 'bottom-left':
			return 'left';
	}
	return 'right';
});

const ui = computed(() =>
	toaster({
		position: props.position,
		swipeDirection: swipeDirection.value
	})
);

function onUpdateOpen(value: boolean, id: string | number) {
	if (value) {
		return;
	}

	remove(id);
}

const hovered = ref(false);
const expanded = computed(() => props.expand || hovered.value);

const refs = ref<{ height: number }[]>([]);

const height = computed(() => refs.value.reduce((acc, { height }) => acc + height + 16, 0));
const frontHeight = computed(() => refs.value[refs.value.length - 1]?.height || 0);

function getOffset(index: number) {
	return refs.value.slice(index + 1).reduce((acc, { height }) => acc + height + 16, 0);
}
</script>
