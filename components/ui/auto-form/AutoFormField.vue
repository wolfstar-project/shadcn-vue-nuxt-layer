<template>
	<component
		:is="isValidConfig(config) ? (typeof config.component === 'string' ? INPUT_COMPONENTS[config.component!] : config.component) : null"
		v-if="!isHidden"
		:field-name="fieldName"
		:label="shape.schema?.description"
		:required="isRequired || shape.required"
		:options="overrideOptions || shape.options"
		:disabled="isDisabled"
		:config="config"
		v-bind="delegatedProps"
	>
		<slot />
	</component>
</template>

<script setup lang="ts" generic="U extends ZodAny">
import type { ZodAny } from 'zod';
import { computed } from 'vue';
import type { Config, ConfigItem, Shape } from './interface';
import { INPUT_COMPONENTS } from './constant';
import useDependencies from './dependencies';

const props = defineProps<{
	fieldName: string;
	shape: Shape;
	config?: ConfigItem | Config<U>;
}>();

function isValidConfig(config: any): config is ConfigItem {
	return config && typeof config.component !== 'undefined';
}

const delegatedProps = computed(() => {
	if (['ZodObject', 'ZodArray'].includes(props.shape?.type)) return { schema: props.shape?.schema };
	return undefined;
});

const { isDisabled, isHidden, isRequired, overrideOptions } = useDependencies(props.fieldName);
</script>
