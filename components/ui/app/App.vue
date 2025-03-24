<template>
	<ConfigProvider :use-id="() => useId() as string" v-bind="configProviderProps">
		<TooltipProvider v-bind="tooltipProps">
			<Toaster v-if="toaster" v-bind="toasterProps">
				<slot />
			</Toaster>
		</TooltipProvider>
	</ConfigProvider>
</template>

<script setup lang="ts">
import type { ConfigProviderProps, TooltipProviderProps } from 'reka-ui';
import { toRef, useId } from 'vue';
import { ConfigProvider, useForwardProps } from 'reka-ui';
import { Toaster } from '@/components/ui/toast';
import { TooltipProvider } from '@/components/ui/tooltip';
import type { ToasterProps } from '@/components/ui/toast';
import { reactivePick } from '@vueuse/core';

interface AppProps extends Omit<ConfigProviderProps, 'useId'> {
	tooltip?: TooltipProviderProps;
	toaster?: ToasterProps;
}

interface AppSlots {
	default(props?: object): unknown;
}

const props = defineProps<AppProps>();
defineSlots<AppSlots>();

const configProviderProps = useForwardProps(reactivePick(props, 'scrollBody', 'locale'));
const tooltipProps = toRef(() => props.tooltip);
const toasterProps = toRef(() => props.toaster);
</script>
