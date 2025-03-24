<template>
	<Primitive v-bind="forwardedProps">
		<slot>
			<UIcon name="radix-icons:dash" />
		</slot>
	</Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from 'reka-ui';

const props = defineProps<PrimitiveProps>();
const forwardedProps = useForwardProps(props);
</script>
