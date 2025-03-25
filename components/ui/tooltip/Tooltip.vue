<template>
	<TooltipRoot v-slot="{ open }" v-bind="rootProps">
		<TooltipTrigger v-if="!!slots.default" v-bind="$attrs" as-child :class="props.class">
			<slot :open="open" />
		</TooltipTrigger>

		<TooltipPortal :disabled="!portal">
			<TooltipContent v-bind="contentProps" :class="ui.content({ class: [!slots.default && props.class, props.ui?.content] })">
				<slot name="content">
					<span v-if="text" :class="ui.text({ class: props.ui?.text })">{{ text }}</span>

					<span v-if="kbds?.length" :class="ui.kbds({ class: props.ui?.kbds })">
						<Kbd
							v-for="(kbd, index) in kbds"
							:key="index"
							:size="(props.ui?.kbdsSize || ui.kbdsSize()) as KbdProps['size']"
							v-bind="typeof kbd === 'string' ? { value: kbd } : kbd"
						/>
					</span>
				</slot>

				<TooltipArrow v-if="!!arrow" v-bind="arrowProps" :class="ui.arrow({ class: props.ui?.arrow })" />
			</TooltipContent>
		</TooltipPortal>
	</TooltipRoot>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import { defu } from 'defu';
import {
	TooltipRoot,
	TooltipTrigger,
	TooltipPortal,
	TooltipContent,
	TooltipArrow,
	useForwardPropsEmits,
	type TooltipContentProps,
	type TooltipArrowProps
} from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { Kbd, type KbdProps } from '@/components/ui/kbd';
import { tooltip, type TooltipEmits, type TooltipProps, type TooltipSlots } from '.';

const props = withDefaults(defineProps<TooltipProps>(), {
	portal: true
});
const emits = defineEmits<TooltipEmits>();
const slots = defineSlots<TooltipSlots>();

const rootProps = useForwardPropsEmits(
	reactivePick(
		props,
		'defaultOpen',
		'open',
		'delayDuration',
		'disableHoverableContent',
		'disableClosingTrigger',
		'disabled',
		'ignoreNonKeyboardFocus'
	),
	emits
);
const contentProps = toRef(() => defu(props.content, { side: 'bottom', sideOffset: 8, collisionPadding: 8 }) as TooltipContentProps);
const arrowProps = toRef(() => props.arrow as TooltipArrowProps);

const ui = computed(() =>
	tooltip({
		side: contentProps.value.side
	})
);
</script>
